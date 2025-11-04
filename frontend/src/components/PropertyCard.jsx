import React, { useState } from 'react'
import PropertyInfoModal from './PropertyInfoModal'
import './PropertyCard.css'

export default function PropertyCard({ property, index, onConnectClick }) {
  const [showModal, setShowModal] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <>
      <article 
        className="property-card"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Image Container */}
        <div className="property-image-container">
          <img
            src={property.image}
            alt={property.title}
            className="property-image"
          />
          
          {/* Gradient Overlay */}
          <div className="property-image-overlay" />
          
          {/* Featured Badge */}
          {property.featured && (
            <div className="featured-badge">
              <svg className="star-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </div>
          )}
          
          {/* Property Type Badge */}
          <div className="property-type-badge">
            {property.type}
          </div>

          {/* Like Button */}
          <button 
            className={`like-button ${isLiked ? 'liked' : ''}`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <svg className="heart-icon" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Card Content */}
        <div className="property-content">
          {/* Price */}
          <div className="property-price">
            {formatPrice(property.price)}
          </div>

          {/* Title */}
          <h3 className="property-title">
            {property.title}
          </h3>

          {/* Address */}
          <p className="property-address">
            <svg className="location-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {property.address}
          </p>

          {/* Property Details */}
          <div className="property-details">
            <div className="property-detail-item">
              <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>{property.beds} Beds</span>
            </div>
            <div className="property-detail-item">
              <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1H21v6H3V3h7.5z" />
              </svg>
              <span>{property.baths} Baths</span>
            </div>
            <div className="property-detail-item">
              <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span>{property.area.toLocaleString()} sqft</span>
            </div>
          </div>

          {/* Divider */}
          <div className="property-divider"></div>

          {/* Agent Info */}
          <div className="property-agent">
            <img 
              src={property.agent.avatar} 
              alt={property.agent.name}
              className="agent-avatar"
            />
            <div className="agent-info">
              <p className="agent-name">{property.agent.name}</p>
              <p className="agent-label">Listing Agent</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="property-actions">
            <button 
              className="action-button primary"
              onClick={() => setShowModal(true)}
            >
              <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              More Info
            </button>
            <button 
              className="action-button secondary"
              onClick={() => onConnectClick(property)}
            >
              <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Connect
            </button>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="card-border-effect" />
      </article>

      {/* Property Info Modal */}
      <PropertyInfoModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        property={property}
      />
    </>
  )
}
