import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PropertyInfoModal.css'

export default function PropertyInfoModal({ isOpen, onClose, property }) {
  if (!isOpen || !property) return null

  const formatPrice = (price) => {
    if (!price) return 'Price not available'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(Number(price))
  }

  // Get primary image or first image from backend data
  const getPropertyImage = () => {
    if (property.images && property.images.length > 0) {
      const primaryImage = property.images.find(img => img.isPrimary)
      return primaryImage ? primaryImage.url : property.images[0].url
    }
    return property.image || 'https://via.placeholder.com/800x600?text=No+Image'
  }

  // Get address string from address object or fallback
  const getAddressString = () => {
    if (property.address) {
      const { street, city, state, zipCode } = property.address
      return `${street || ''}, ${city || ''}, ${state || ''} ${zipCode || ''}`.replace(/,\s*,/g, ',').trim()
    }
    return property.address || 'Address not available'
  }

  // Agent avatar aspect detection: if image is nearly square, render square class
  const [isAgentAvatarSquare, setIsAgentAvatarSquare] = useState(false)
  const onAgentAvatarLoad = (e) => {
    try {
      const { naturalWidth: w, naturalHeight: h } = e.target
      if (!w || !h) return
      const ratio = w / h
      setIsAgentAvatarSquare(Math.abs(ratio - 1) <= 0.5)
    } catch (err) {}
  }

  // No per-agent contain override; use automatic aspect detection only
  const navigate = useNavigate()

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header with Image */}
        <div className="modal-header">
          <img src={getPropertyImage()} alt={property.title || 'Property'} className="modal-header-image" />
          <div className="modal-header-overlay">
            <div className="modal-header-content">
              {property.featured && (
                <div className="modal-featured-badge">
                  <svg className="star-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Featured Property
                </div>
              )}
              <h2 className="modal-title">{property.title || 'Untitled Property'}</h2>
              <p className="modal-price">{formatPrice(property.price)}</p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Quick Info - Only show if data exists */}
          {(property.beds || property.baths || property.area || property.yearBuilt) && (
            <div className="modal-quick-info">
              {property.beds && (
                <div className="quick-info-item">
                  <svg className="quick-info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <div>
                    <p className="quick-info-label">Bedrooms</p>
                    <p className="quick-info-value">{property.beds}</p>
                  </div>
                </div>
              )}

              {property.baths && (
                <div className="quick-info-item">
                  <svg className="quick-info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1H21v6H3V3h7.5z" />
                  </svg>
                  <div>
                    <p className="quick-info-label">Bathrooms</p>
                    <p className="quick-info-value">{property.baths}</p>
                  </div>
                </div>
              )}

              {property.area && (
                <div className="quick-info-item">
                  <svg className="quick-info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <div>
                    <p className="quick-info-label">Area</p>
                    <p className="quick-info-value">{Number(property.area).toLocaleString()} sqft</p>
                  </div>
                </div>
              )}

              {property.yearBuilt && (
                <div className="quick-info-item">
                  <svg className="quick-info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="quick-info-label">Year Built</p>
                    <p className="quick-info-value">{property.yearBuilt}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Location */}
          <div className="modal-section">
            <h3 className="section-title">
              <svg className="section-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Location
            </h3>
            <p className="section-content">{getAddressString()}</p>
          </div>

          {/* Description */}
          {property.description && (
            <div className="modal-section">
              <h3 className="section-title">
                <svg className="section-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                Description
              </h3>
              <p className="section-content">{property.description}</p>
            </div>
          )}

          {/* Amenities */}
          {property.amenities && property.amenities.length > 0 && (
            <div className="modal-section">
              <h3 className="section-title">
                <svg className="section-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Amenities
              </h3>
              <div className="amenities-grid">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="amenity-item">
                    <svg className="amenity-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Agent Information */}
          <div className="modal-section agent-section">
            <h3 className="section-title">
              <svg className="section-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Contact Agent
            </h3>
            <div className="agent-card">
                <img
                  src={property.agent.avatar}
                  alt={property.agent.name}
                  className={`agent-card-avatar ${isAgentAvatarSquare ? 'square-avatar' : 'rounded-avatar'}`}
                  onLoad={onAgentAvatarLoad}
                  loading="lazy"
                  decoding="async"
                />
              <div className="agent-card-info">
                <p className="agent-card-name">{property.agent?.name || property.owner?.username || 'Property Owner'}</p>
                <p className="agent-card-title">Licensed Real Estate Agent</p>
                <div className="agent-contact">
                  {(property.agent?.phone || property.owner?.phone) && (
                    <a href={`tel:${property.agent?.phone || property.owner?.phone}`} className="agent-contact-item">
                      <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {property.agent?.phone || property.owner?.phone}
                    </a>
                  )}
                  {(property.agent?.email || property.owner?.email) && (
                    <a href={`mailto:${property.agent?.email || property.owner?.email}`} className="agent-contact-item">
                      <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {property.agent?.email || property.owner?.email}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="modal-actions">
            <button
              className="modal-action-button schedule"
              onClick={() => navigate('/schedule-viewing', { state: { property } })}
            >
              <svg className="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Viewing
            </button>
            <button
              className="modal-action-button offer"
              onClick={() => navigate('/make-offer', { state: { property } })}
            >
              <svg className="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Make an Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
