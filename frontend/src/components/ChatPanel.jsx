import React, { useState, useEffect, useRef } from 'react'
import useAuth from '../hooks/useAuth'
import './ChatPanel.css'

export default function ChatPanel({ isOpen, onClose, property }) {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [conversationId, setConversationId] = useState(null)
  const [error, setError] = useState('')
  const messagesEndRef = useRef(null)
  const auth = useAuth()

  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Load or create conversation when panel opens
  useEffect(() => {
    const loadConversation = async () => {
      if (!auth.token || !property?.id) return

      try {
        setLoading(true)
        setError('')
        
        const response = await fetch(`${API_BASE_URL}/api/chat/conversations/property/${property.id}`, {
          headers: {
            'Authorization': `Bearer ${auth.token}`
          }
        })

        if (response.ok) {
          const data = await response.json()
          setConversationId(data.conversation.id)
          setMessages(data.conversation.messages || [])
        } else {
          const data = await response.json()
          // Check if it's a "no conversations" case (seller viewing their own property)
          if (data.noConversations) {
            setError('No messages yet. Buyers will see this when they contact you.')
            setMessages([])
          } else {
            setError(data.message || 'Failed to load conversation')
          }
        }
      } catch (err) {
        console.error('Load conversation error:', err)
        setError('Failed to connect to server')
      } finally {
        setLoading(false)
      }
    }

    if (isOpen && property && auth.user) {
      loadConversation()
    }
  }, [isOpen, property, auth.user, auth.token, API_BASE_URL])

  // Poll for new messages every 3 seconds when panel is open
  useEffect(() => {
    if (!isOpen || !conversationId || !auth.token) return

    const pollMessages = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/chat/conversations/${conversationId}/messages`, {
          headers: {
            'Authorization': `Bearer ${auth.token}`
          }
        })

        if (response.ok) {
          const data = await response.json()
          setMessages(data.messages || [])
        }
      } catch (err) {
        console.error('Poll messages error:', err)
      }
    }

    const interval = setInterval(pollMessages, 3000)
    return () => clearInterval(interval)
  }, [isOpen, conversationId, auth.token, API_BASE_URL])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    
    if (!inputMessage.trim() || !conversationId) return

    const messageText = inputMessage.trim()
    const tempId = `temp-${Date.now()}`
    
    // Optimistically add message to UI immediately
    const optimisticMessage = {
      id: tempId,
      text: messageText,
      createdAt: new Date().toISOString(),
      sender: {
        id: auth.user.id,
        username: auth.user.username,
        firstName: auth.user.firstName,
        email: auth.user.email
      }
    }
    
    setMessages(prev => [...prev, optimisticMessage])
    setInputMessage('')

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat/conversations/${conversationId}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.token}`
        },
        body: JSON.stringify({ text: messageText })
      })

      if (response.ok) {
        const data = await response.json()
        // Replace temporary message with real one from server
        setMessages(prev => prev.map(msg => 
          msg.id === tempId ? data.message : msg
        ))
      } else {
        // Remove optimistic message on error
        setMessages(prev => prev.filter(msg => msg.id !== tempId))
        const data = await response.json()
        setError(data.message || 'Failed to send message')
        setInputMessage(messageText)
      }
    } catch (err) {
      // Remove optimistic message on error
      setMessages(prev => prev.filter(msg => msg.id !== tempId))
      console.error('Send message error:', err)
      setError('Failed to send message')
      setInputMessage(messageText)
    }
  }

  const getOtherUser = () => {
    if (!auth.user || !messages.length) return null
    
    // Find the other user from the first message
    const otherMessage = messages.find(msg => msg.sender.id !== auth.user.id)
    return otherMessage?.sender || property?.owner
  }

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now - date

    // Less than 1 minute
    if (diff < 60000) return 'Just now'
    
    // Less than 1 hour
    if (diff < 3600000) {
      const minutes = Math.floor(diff / 60000)
      return `${minutes} min ago`
    }
    
    // Today
    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    
    // This week
    if (diff < 604800000) {
      return date.toLocaleDateString([], { weekday: 'short', hour: '2-digit', minute: '2-digit' })
    }
    
    // Older
    return date.toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
  }

  if (!isOpen || !property) return null

  if (!auth.user) {
    return (
      <div className={`chat-panel ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <h3>Please Sign In</h3>
          <button className="chat-close-button" onClick={onClose}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="chat-signin-message">
          <p>You need to be signed in to chat with property owners.</p>
        </div>
      </div>
    )
  }

  const otherUser = getOtherUser() || property.owner
  const otherUserName = otherUser?.username || otherUser?.firstName || otherUser?.email || 'Property Owner'

  return (
    <div className={`chat-panel ${isOpen ? 'open' : ''}`}>
      {/* Chat Header */}
      <div className="chat-header">
        <div className="chat-header-info">
          <div className="chat-agent-avatar-wrapper">
            <div className="chat-agent-avatar-placeholder">
              {otherUserName.charAt(0).toUpperCase()}
            </div>
          </div>
          <div>
            <h3 className="chat-agent-name">{otherUserName}</h3>
            <p className="chat-agent-status">
              <span className="status-dot"></span>
              Available
            </p>
          </div>
        </div>
        <button className="chat-close-button" onClick={onClose}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Property Info Bar */}
      <div className="chat-property-bar">
        <img 
          src={property.images?.[0]?.url || property.image || 'https://via.placeholder.com/60x60?text=Property'} 
          alt={property.title || 'Property'}
          className="chat-property-image"
        />
        <div className="chat-property-info">
          <p className="chat-property-title">{property.title || 'Property'}</p>
          <p className="chat-property-price">
            {property.price ? new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
            }).format(Number(property.price)) : 'Price available on request'}
          </p>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="chat-error-message">
          {error}
        </div>
      )}

      {/* Messages Container */}
      <div className="chat-messages">
        {loading ? (
          <div className="chat-loading">Loading messages...</div>
        ) : messages.length === 0 ? (
          <div className="chat-empty">
            <p>Start a conversation about this property!</p>
          </div>
        ) : (
          messages.map((message) => {
            const isCurrentUser = message.sender.id === auth.user.id
            const senderName = message.sender.username || message.sender.firstName || message.sender.email

            return (
              <div 
                key={message.id} 
                className={`chat-message ${isCurrentUser ? 'user-message' : 'agent-message'}`}
              >
                {!isCurrentUser && (
                  <div className="message-avatar-placeholder">
                    {senderName.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="message-content">
                  <div className="message-bubble">
                    {message.text}
                  </div>
                  <p className="message-timestamp">{formatTimestamp(message.createdAt)}</p>
                </div>
              </div>
            )
          })
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <form className="chat-input-container" onSubmit={handleSendMessage}>
        <div className="chat-input-wrapper">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="chat-input"
            disabled={loading || !conversationId}
          />
          <button 
            type="submit" 
            className="chat-send-button"
            disabled={!inputMessage.trim() || loading || !conversationId}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}
