import React, { useState, useEffect, useRef } from 'react'
import './ChatPanel.css'

export default function ChatPanel({ isOpen, onClose, property }) {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && property && messages.length === 0) {
      
      setTimeout(() => {
        const agentName = property.agent?.name || property.owner?.username || 'Property Owner'
        const agentAvatar = property.agent?.avatar || property.owner?.avatar || 'https://via.placeholder.com/40?text=Agent'
        
        const greeting = {
          id: Date.now(),
          text: `Hello! I'm ${agentName}, and I'd be happy to help you with ${property.title || 'this property'}. How can I assist you today?`,
          sender: 'agent',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          avatar: agentAvatar
        }
        setMessages([greeting])
      }, 500)
    }
  }, [isOpen, property, messages.length])

  const handleSendMessage = (e) => {
    e.preventDefault()
    
    if (!inputMessage.trim()) return

   
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

 
    setTimeout(() => {
      const agentResponses = [
        "That's a great question! This property has recently been renovated with modern amenities.",
        "I'd be happy to schedule a viewing for you. When would be a convenient time?",
        "The neighborhood is fantastic with great schools and parks nearby.",
        "Let me get those details for you right away.",
        "This property has been priced competitively and we've had quite a bit of interest.",
        "I can definitely help you with that. Would you like to discuss the financing options?"
      ]

      const agentAvatar = property.agent?.avatar || property.owner?.avatar || 'https://via.placeholder.com/40?text=Agent'
      
      const response = {
        id: Date.now() + 1,
        text: agentResponses[Math.floor(Math.random() * agentResponses.length)],
        sender: 'agent',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: agentAvatar
      }

      setIsTyping(false)
      setMessages(prev => [...prev, response])
    }, 1500)
  }

  const quickReplies = [
    "Schedule a viewing",
    "Request more info",
    "Discuss price",
    "Neighborhood details"
  ]

  const handleQuickReply = (reply) => {
    setInputMessage(reply)
  }

  if (!isOpen || !property) return null

  return (
    <div className={`chat-panel ${isOpen ? 'open' : ''}`}>
      {/* Chat Header */}
      <div className="chat-header">
        <div className="chat-header-info">
          <img 
            src={property.agent?.avatar || property.owner?.avatar || 'https://via.placeholder.com/40?text=Agent'} 
            alt={property.agent?.name || property.owner?.username || 'Agent'}
            className="chat-agent-avatar"
          />
          <div>
            <h3 className="chat-agent-name">{property.agent?.name || property.owner?.username || 'Property Owner'}</h3>
            <p className="chat-agent-status">
              <span className="status-dot"></span>
              Online
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

      {/* Messages Container */}
      <div className="chat-messages">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`chat-message ${message.sender === 'user' ? 'user-message' : 'agent-message'}`}
          >
            {message.sender === 'agent' && (
              <img 
                src={message.avatar} 
                alt="Agent"
                className="message-avatar"
              />
            )}
            <div className="message-content">
              <div className="message-bubble">
                {message.text}
              </div>
              <p className="message-timestamp">{message.timestamp}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="chat-message agent-message">
            <img 
              src={property.agent?.avatar || property.owner?.avatar || 'https://via.placeholder.com/40?text=Agent'} 
              alt="Agent"
              className="message-avatar"
            />
            <div className="message-content">
              <div className="message-bubble typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      {messages.length <= 2 && (
        <div className="chat-quick-replies">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              className="quick-reply-button"
              onClick={() => handleQuickReply(reply)}
            >
              {reply}
            </button>
          ))}
        </div>
      )}

      {/* Chat Input */}
      <form className="chat-input-container" onSubmit={handleSendMessage}>
        <div className="chat-input-wrapper">
          <button type="button" className="chat-attach-button">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="chat-input"
          />
          <button 
            type="submit" 
            className="chat-send-button"
            disabled={!inputMessage.trim()}
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
