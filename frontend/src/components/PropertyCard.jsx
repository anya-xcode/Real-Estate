import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import './PropertyCard.css'

export default function PropertyCard({ property, index, onConnectClick }) {
  const navigate = useNavigate()
  const auth = useAuth()
  const [isLiked, setIsLiked] = useState(false)
  const [favoriteId, setFavoriteId] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001'

  const formatPrice = (price) => {
    if (!price) return 'Price not available'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(Number(price))
  }

  // Get all property images
  const getAllPropertyImages = () => {
    const images = []
    
    // Check if property.images exists and is an array
    if (property.images && Array.isArray(property.images) && property.images.length > 0) {
      // Map through images array and extract URLs
      property.images.forEach(img => {
        if (img && img.url) {
          images.push(img.url)
        } else if (typeof img === 'string') {
          // Handle case where images might be an array of strings
          images.push(img)
        }
      })
    }
    
    // Fallback to single image property
    if (images.length === 0 && property.image) {
      images.push(property.image)
    }
    
    // Final fallback
    if (images.length === 0) {
      images.push('https://via.placeholder.com/400x300?text=No+Image')
    }
    
    return images
  }

  const propertyImages = getAllPropertyImages()
  const hasMultipleImages = propertyImages.length > 1
  
  // Debug: Log images for troubleshooting
  useEffect(() => {
    if (property?.id) {
      console.log(`Property ${property.id} images:`, propertyImages.length, propertyImages)
    }
  }, [property?.id, propertyImages.length])

  // Check if property is already favorited
  useEffect(() => {
    if (auth.user && property?.id) {
      checkFavoriteStatus()
    }
  }, [auth.user, property?.id])

  const checkFavoriteStatus = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/favorites`, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        }
      })
      if (response.ok) {
        const data = await response.json()
        const favorite = data.favorites.find(fav => fav.propertyId === property.id)
        if (favorite) {
          setIsLiked(true)
          setFavoriteId(favorite.id)
        }
      }
    } catch (error) {
      console.error('Error checking favorite status:', error)
    }
  }

  const handleToggleFavorite = async (e) => {
    e.stopPropagation()
    
    if (!auth.user) {
      navigate('/signin')
      return
    }

    try {
      if (isLiked && favoriteId) {
        // Remove favorite
        const response = await fetch(`${API_BASE_URL}/api/favorites/${favoriteId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${auth.token}`
          }
        })
        if (response.ok) {
          setIsLiked(false)
          setFavoriteId(null)
        }
      } else {
        // Add favorite
        const response = await fetch(`${API_BASE_URL}/api/favorites`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth.token}`
          },
          body: JSON.stringify({ propertyId: property.id })
        })
        if (response.ok) {
          const data = await response.json()
          setIsLiked(true)
          setFavoriteId(data.favorite.id)
        }
      }
    } catch (error) {
      console.error('Error toggling favorite:', error)
    }
  }
  
  // Reset to first image when property changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [property?.id])

  // Get current image to display
  const getCurrentImage = () => {
    return propertyImages[currentImageIndex] || propertyImages[0]
  }

  // Navigate to next image
  const goToNextImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length)
  }

  // Navigate to previous image
  const goToPrevImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length)
  }

  // Get address string from address object or fallback
  const getAddressString = () => {
    if (!property.address) {
      return 'Address not available'
    }
    
    // If address is a string, return it directly
    if (typeof property.address === 'string') {
      return property.address
    }
    
    // If address is an object, format it
    if (typeof property.address === 'object') {
      const { street, city, state, zipCode } = property.address
      return `${street || ''}, ${city || ''}, ${state || ''} ${zipCode || ''}`.replace(/,\s*,/g, ',').trim()
    }
    
    return 'Address not available'
  }

  // Open address in Google Maps
  const handleLocationClick = (e) => {
    e.stopPropagation()
    const address = getAddressString()
    if (address && address !== 'Address not available') {
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
      window.open(mapsUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const [isAvatarSquare, setIsAvatarSquare] = useState(false)

  const onAvatarLoad = (e) => {
    try {
      const { naturalWidth: w, naturalHeight: h } = e.target
      if (!w || !h) return
      const ratio = w / h
      setIsAvatarSquare(Math.abs(ratio - 1) <= 0.05)
    } catch (err) {
      // ignore
    }
  }

  // No per-agent contain override; use automatic aspect detection only

  return (
    <>
      <article 
        className="property-card"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Image Container */}
        <div className="property-image-container">
          {propertyImages.map((imageUrl, idx) => (
            <img
              key={`${property?.id || 'property'}-img-${idx}`}
              src={imageUrl}
              alt={`${property.title || 'Property'} - Image ${idx + 1}`}
              className={`property-image ${idx === currentImageIndex ? 'active' : ''}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: idx === currentImageIndex ? 1 : 0,
                zIndex: idx === currentImageIndex ? 2 : 1,
                pointerEvents: idx === currentImageIndex ? 'auto' : 'none'
              }}
            />
          ))}
          
          {/* Image Navigation Arrows - Only show if multiple images */}
          {hasMultipleImages && (
            <>
              <button 
                className="image-nav-button image-nav-prev"
                onClick={goToPrevImage}
                aria-label="Previous image"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                className="image-nav-button image-nav-next"
                onClick={goToNextImage}
                aria-label="Next image"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image Indicators */}
              <div className="image-indicators">
                {propertyImages.map((_, index) => (
                  <button
                    key={index}
                    className={`image-indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentImageIndex(index)
                    }}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Image Counter */}
              <div className="image-counter">
                {currentImageIndex + 1} / {propertyImages.length}
              </div>
            </>
          )}
          
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
          {property.type && (
            <div className="property-type-badge">
              {property.type}
            </div>
          )}

          {/* Verification Status Badge */}
          {property.verificationStatus && (
            <div className={`verification-status-badge ${property.verificationStatus}`}>
              {property.verificationStatus === 'approved' && '✓ Verified'}
              {property.verificationStatus === 'pending' && '⏱ Pending'}
              {property.verificationStatus === 'denied' && '✗ Denied'}
            </div>
          )}

          {/* Like Button */}
          <button 
            className={`like-button ${isLiked ? 'liked' : ''}`}
            onClick={handleToggleFavorite}
            title={isLiked ? 'Remove from favorites' : 'Add to favorites'}
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
            {property.title || 'Untitled Property'}
          </h3>

          {/* Address */}
          <div className="property-address">
            <button 
              className="location-icon-button" 
              onClick={handleLocationClick}
              aria-label="Open in Google Maps"
              title="Open in Google Maps"
            >
              <svg className="location-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <span className="address-text">{getAddressString()}</span>
          </div>

          {/* Property Details - Show only if available */}
          {(property.beds || property.baths || property.area) && (
            <div className="property-details">
              {property.beds && (
                <div className="property-detail-item">
                  <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>{property.beds} Beds</span>
                </div>
              )}
              {property.baths && (
                <div className="property-detail-item">
                  <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1H21v6H3V3h7.5z" />
                  </svg>
                  <span>{property.baths} Baths</span>
                </div>
              )}
              {property.area && (
                <div className="property-detail-item">
                  <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <span>{Number(property.area).toLocaleString()} sqft</span>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons - In One Line */}
          <div className="property-actions">
            <button 
              className="action-button primary"
              onClick={() => navigate(`/property/${property.id}`, { state: { property } })}
            >
              <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              More Info
            </button>
            {/* Only show Connect button if user is not the owner */}
            {(!auth?.user || auth.user.id !== property.ownerId) && (
              <button 
                className="action-button secondary"
                onClick={() => onConnectClick(property)}
              >
                <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Connect
              </button>
            )}
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="card-border-effect" />
      </article>
    </>
  )
}
