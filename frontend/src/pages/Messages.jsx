import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import './Messages.css'

export default function Messages() {
  const [conversations, setConversations] = useState([])
  const [selectedConversation, setSelectedConversation] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [initialLoad, setInitialLoad] = useState(true)
  const auth = useAuth()
  const navigate = useNavigate()

  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

  const loadConversations = useCallback(async () => {
    try {
      setError('')
      
      const response = await fetch(`${API_BASE_URL}/api/chat/conversations`, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        setConversations(data.conversations || [])
      } else {
        const data = await response.json()
        setError(data.message || 'Failed to load conversations')
      }
    } catch (err) {
      console.error('Load conversations error:', err)
      setError('Failed to connect to server')
    } finally {
      setInitialLoad(false)
    }
  }, [auth.token, API_BASE_URL])

  useEffect(() => {
    if (!auth.user) {
      navigate('/signin')
      return
    }
    loadConversations()
  }, [auth.user, navigate, loadConversations])

  // Poll for new conversations every 5 seconds
  useEffect(() => {
    if (!auth.user) return

    const interval = setInterval(() => {
      loadConversations()
    }, 5000)

    return () => clearInterval(interval)
  }, [auth.user, loadConversations])

  // Poll for new messages in selected conversation every 3 seconds
  useEffect(() => {
    if (!selectedConversation || !auth.token) return

    const pollMessages = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/chat/conversations/${selectedConversation.id}/messages`, {
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
  }, [selectedConversation, auth.token, API_BASE_URL])

  const loadMessages = async (conversationId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/chat/conversations/${conversationId}/messages`, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        setMessages(data.messages || [])
      } else {
        setMessages([])
      }
    } catch (err) {
      console.error('Load messages error:', err)
      setMessages([])
    }
  }

  const selectConversation = (conversation) => {
    setSelectedConversation(conversation)
    loadMessages(conversation.id)
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    
    if (!newMessage.trim() || !selectedConversation) return

    const messageText = newMessage.trim()
    const tempId = `temp-${Date.now()}`
    
    // Optimistically add message to UI immediately
    const optimisticMessage = {
      id: tempId,
      text: messageText,
      createdAt: new Date().toISOString(),
      senderId: auth.user.id,
      sender: {
        id: auth.user.id,
        username: auth.user.username,
        firstName: auth.user.firstName,
        email: auth.user.email
      }
    }
    
    setMessages(prev => [...prev, optimisticMessage])
    setNewMessage('')
    setSending(true)

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat/conversations/${selectedConversation.id}/messages`, {
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
        alert(data.message || 'Failed to send message')
        setNewMessage(messageText)
      }
    } catch (err) {
      // Remove optimistic message on error
      setMessages(prev => prev.filter(msg => msg.id !== tempId))
      console.error('Send message error:', err)
      alert('Failed to send message')
      setNewMessage(messageText)
    } finally {
      setSending(false)
    }
  }

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now - date

    if (diff < 60000) return 'Just now'
    if (diff < 3600000) return `${Math.floor(diff / 60000)} min ago`
    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    if (diff < 604800000) {
      return date.toLocaleDateString([], { weekday: 'short', hour: '2-digit', minute: '2-digit' })
    }
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' })
  }

  const getOtherUser = (conversation) => {
    if (!auth.user) return null
    return conversation.buyerId === auth.user.id ? conversation.seller : conversation.buyer
  }

  if (initialLoad) {
    return (
      <div className="messages-page">
        <div className="messages-loading">
          <div className="loading-spinner"></div>
          <p>Loading conversations...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="messages-page">
      <div className="messages-container">
        {/* Conversations List */}
        <div className="conversations-sidebar">
          <div className="sidebar-header">
            <h2>Messages</h2>
            <span className="conversations-count">{conversations.length}</span>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {conversations.length === 0 ? (
            <div className="no-conversations">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p>No messages yet</p>
              <span>Start chatting about properties to see messages here</span>
            </div>
          ) : (
            <div className="conversations-list">
              {conversations.map(conversation => {
                const otherUser = getOtherUser(conversation)
                const lastMessage = conversation.messages?.[conversation.messages.length - 1]
                const unreadCount = conversation.messages?.filter(m => !m.isRead && m.senderId !== auth.user.id).length || 0
                
                return (
                  <div
                    key={conversation.id}
                    className={`conversation-item ${selectedConversation?.id === conversation.id ? 'active' : ''}`}
                    onClick={() => selectConversation(conversation)}
                  >
                    <div className="conversation-avatar">
                      {otherUser?.username?.[0]?.toUpperCase() || otherUser?.email?.[0]?.toUpperCase() || 'U'}
                    </div>
                    <div className="conversation-details">
                      <div className="conversation-header">
                        <h3 className="conversation-name">
                          {otherUser?.username || otherUser?.firstName || otherUser?.email || 'User'}
                        </h3>
                        {lastMessage && (
                          <span className="conversation-time">
                            {formatTimestamp(lastMessage.createdAt)}
                          </span>
                        )}
                      </div>
                      <div className="conversation-property">
                        {conversation.property?.title || 'Property'}
                      </div>
                      {lastMessage && (
                        <div className="conversation-preview">
                          <span className={`preview-text ${unreadCount > 0 ? 'unread' : ''}`}>
                            {lastMessage.senderId === auth.user.id ? 'You: ' : ''}
                            {lastMessage.text}
                          </span>
                          {unreadCount > 0 && (
                            <span className="unread-badge">{unreadCount}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Chat Area */}
        <div className="chat-area">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="chat-header">
                <div className="chat-header-info">
                  <div className="chat-user-avatar">
                    {getOtherUser(selectedConversation)?.username?.[0]?.toUpperCase() || 
                     getOtherUser(selectedConversation)?.email?.[0]?.toUpperCase() || 'U'}
                  </div>
                  <div>
                    <h3 className="chat-user-name">
                      {getOtherUser(selectedConversation)?.username || 
                       getOtherUser(selectedConversation)?.firstName || 
                       getOtherUser(selectedConversation)?.email || 'User'}
                    </h3>
                    <p className="chat-property-name">
                      About: {selectedConversation.property?.title || 'Property'}
                    </p>
                  </div>
                </div>
                <button
                  className="view-property-btn"
                  onClick={() => navigate(`/property/${selectedConversation.propertyId}`)}
                >
                  View Property
                </button>
              </div>

              {/* Property Preview */}
              <div className="property-preview-bar">
                <img 
                  src={selectedConversation.property?.images?.[0]?.url || 'https://via.placeholder.com/60'}
                  alt={selectedConversation.property?.title}
                  className="property-preview-image"
                />
                <div className="property-preview-info">
                  <p className="property-preview-title">{selectedConversation.property?.title}</p>
                  <p className="property-preview-price">
                    {selectedConversation.property?.price 
                      ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(Number(selectedConversation.property.price))
                      : 'Price available on request'}
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div className="messages-area">
                {messages.length === 0 ? (
                  <div className="no-messages">
                    <p>No messages yet. Start the conversation!</p>
                  </div>
                ) : (
                  messages.map(message => {
                    const isCurrentUser = message.senderId === auth.user.id
                    const sender = isCurrentUser ? auth.user : getOtherUser(selectedConversation)
                    
                    return (
                      <div 
                        key={message.id}
                        className={`message ${isCurrentUser ? 'message-sent' : 'message-received'}`}
                      >
                        {!isCurrentUser && (
                          <div className="message-avatar">
                            {sender?.username?.[0]?.toUpperCase() || sender?.email?.[0]?.toUpperCase() || 'U'}
                          </div>
                        )}
                        <div className="message-content">
                          <div className="message-bubble">
                            {message.text}
                          </div>
                          <div className="message-timestamp">
                            {formatTimestamp(message.createdAt)}
                          </div>
                        </div>
                      </div>
                    )
                  })
                )}
              </div>

              {/* Message Input */}
              <form className="message-input-container" onSubmit={sendMessage}>
                <input
                  type="text"
                  className="message-input"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  disabled={sending}
                />
                <button 
                  type="submit"
                  className="send-button"
                  disabled={!newMessage.trim() || sending}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </>
          ) : (
            <div className="no-chat-selected">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <h3>Select a conversation</h3>
              <p>Choose a conversation from the left to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
