import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import './PropertyDetails.css'
import Footer from '../components/Footer'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001'

export default function PropertyDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [property, setProperty] = useState(location.state?.property || null)
  const [loading, setLoading] = useState(!property)
  const [error, setError] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Fetch property if not passed via state
  useEffect(() => {
    if (!property && id) {
      const fetchProperty = async () => {
        try {
          setLoading(true)
          const response = await fetch(`${API_URL}/api/properties/${id}`)
          if (!response.ok) {
            throw new Error('Failed to fetch property')
          }
          const data = await response.json()
          setProperty(data.property)
          setError(null)
        } catch (err) {
          setError(err.message)
          setProperty(null)
        } finally {
          setLoading(false)
        }
      }
      fetchProperty()
    }
  }, [id, property])

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
    if (property?.images && Array.isArray(property.images) && property.images.length > 0) {
      property.images.forEach(img => {
        if (img && img.url) {
          images.push(img.url)
        } else if (typeof img === 'string') {
          images.push(img)
        }
      })
    }
    if (images.length === 0 && property?.image) {
      images.push(property.image)
    }
    if (images.length === 0) {
      images.push('https://via.placeholder.com/800x600?text=No+Image')
    }
    return images
  }

  const propertyImages = getAllPropertyImages()
  const hasMultipleImages = propertyImages.length > 1

  // Reset to first image when property changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [property?.id])

  // Navigation functions
  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length)
  }

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length)
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  const openFullscreen = () => {
    setIsFullscreen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeFullscreen = () => {
    setIsFullscreen(false)
    document.body.style.overflow = 'unset'
  }

  const handleFullscreenNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length)
  }

  const handleFullscreenPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length)
  }

  // Close fullscreen on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isFullscreen) {
        closeFullscreen()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isFullscreen])

  // Get address string from address object or fallback
  const getAddressString = () => {
    if (property?.address) {
      if (typeof property.address === 'string') {
        return property.address
      }
      const { street, city, state, zipCode } = property.address
      return `${street || ''}, ${city || ''}, ${state || ''} ${zipCode || ''}`.replace(/,\s*,/g, ',').trim()
    }
    return property?.address || 'Address not available'
  }

  // Agent avatar aspect detection
  const [isAgentAvatarSquare, setIsAgentAvatarSquare] = useState(false)
  const onAgentAvatarLoad = (e) => {
    try {
      const { naturalWidth: w, naturalHeight: h } = e.target
      if (!w || !h) return
      const ratio = w / h
      setIsAgentAvatarSquare(Math.abs(ratio - 1) <= 0.5)
    } catch (err) {}
  }

  if (loading) {
    return (
      <div className="property-details-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading property details...</p>
        </div>
      </div>
    )
  }

  if (error || !property) {
    return (
      <div className="property-details-page">
        <div className="error-container">
          <h3>Property Not Found</h3>
          <p>{error || 'The property you are looking for does not exist.'}</p>
          <button className="btn-primary" onClick={() => navigate('/properties')}>
            Back to Properties
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="property-details-page">
      {/* Back Button */}
      <button className="back-button-top" onClick={() => navigate(-1)}>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      {/* Main Layout - Two Columns */}
      <div className="property-details-layout">
        {/* Left Side - Images Slider */}
        <div className="property-images-sidebar">
          <div className="main-image-container">
            {/* Image Slider */}
            <div className="image-slider-wrapper" onClick={openFullscreen}>
              {propertyImages.map((imageUrl, idx) => (
                <img
                  key={idx}
                  src={imageUrl}
                  alt={`${property.title || 'Property'} - Image ${idx + 1}`}
                  className={`main-property-image ${idx === currentImageIndex ? 'active' : ''}`}
                  style={{
                    opacity: idx === currentImageIndex ? 1 : 0,
                    zIndex: idx === currentImageIndex ? 1 : 0,
                    cursor: 'pointer'
                  }}
                />
              ))}
              
              {/* Navigation Buttons */}
              {hasMultipleImages && (
                <>
                  <button 
                    className="slider-nav-button prev-button"
                    onClick={goToPrevImage}
                    aria-label="Previous image"
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    className="slider-nav-button next-button"
                    onClick={goToNextImage}
                    aria-label="Next image"
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Counter */}
              {hasMultipleImages && (
                <div className="image-counter">
                  {currentImageIndex + 1} / {propertyImages.length}
                </div>
              )}

              {/* Featured Badge */}
              {property.featured && (
                <div className="featured-badge-sidebar">
                  <svg className="star-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Featured
                </div>
              )}
            </div>

            {/* Image Indicators */}
            {hasMultipleImages && (
              <div className="image-indicators">
                {propertyImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`indicator-dot ${idx === currentImageIndex ? 'active' : ''}`}
                    onClick={() => goToImage(idx)}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="property-details-content">
          {/* Property Header */}
          <div className="property-header-section">
            <div className="property-header-top">
              {property.type && (
                <span className="property-type-badge-details">{property.type}</span>
              )}
              {property.featured && (
                <span className="property-status-badge featured">Featured</span>
              )}
            </div>
            <h1 className="property-details-title">{property.title || 'Untitled Property'}</h1>
            <p className="property-details-price">{formatPrice(property.price)}</p>
          </div>

          {/* Quick Info */}
          {(property.beds || property.baths || property.area || property.yearBuilt) && (
            <div className="property-details-quick-info">
              {property.beds && (
                <div className="quick-info-item-details">
                  <svg className="quick-info-icon-details" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <div>
                    <p className="quick-info-label-details">Bedrooms</p>
                    <p className="quick-info-value-details">{property.beds}</p>
                  </div>
                </div>
              )}

              {property.baths && (
                <div className="quick-info-item-details">
                  <svg className="quick-info-icon-details" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1H21v6H3V3h7.5z" />
                  </svg>
                  <div>
                    <p className="quick-info-label-details">Bathrooms</p>
                    <p className="quick-info-value-details">{property.baths}</p>
                  </div>
                </div>
              )}

              {property.area && (
                <div className="quick-info-item-details">
                  <svg className="quick-info-icon-details" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <div>
                    <p className="quick-info-label-details">Area</p>
                    <p className="quick-info-value-details">{Number(property.area).toLocaleString()} sqft</p>
                  </div>
                </div>
              )}

              {property.yearBuilt && (
                <div className="quick-info-item-details">
                  <svg className="quick-info-icon-details" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="quick-info-label-details">Year Built</p>
                    <p className="quick-info-value-details">{property.yearBuilt}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Location */}
          <div className="property-details-section">
            <h3 className="section-title-details">
              <svg className="section-icon-details" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Location & Address
            </h3>
            <div className="location-content-wrapper">
              <p className="section-content-details location-address">{getAddressString()}</p>
              <button 
                className="view-map-button"
                onClick={() => {
                  const address = encodeURIComponent(getAddressString())
                  window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
                }}
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                View on Map
              </button>
            </div>
          </div>

          {/* Description */}
          {property.description && (
            <div className="property-details-section">
              <h3 className="section-title-details">
                <svg className="section-icon-details" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                Description
              </h3>
              <p className="section-content-details">{property.description}</p>
            </div>
          )}

          {/* Amenities */}
          {property.amenities && property.amenities.length > 0 && (
            <div className="property-details-section">
              <h3 className="section-title-details">
                <svg className="section-icon-details" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Property Amenities
              </h3>
              <div className="amenities-grid-details">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="amenity-item-details">
                    <svg className="amenity-check-details" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nearby Places */}
          <div className="property-details-section">
            <h3 className="section-title-details">
              <svg className="section-icon-details" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Nearby Places
            </h3>
            <div className="nearby-places-grid">
              <div className="nearby-place-item">
                <div className="nearby-place-icon airport">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <div className="nearby-place-info">
                  <p className="nearby-place-name">International Airport</p>
                  <p className="nearby-place-distance">12.5 miles</p>
                </div>
              </div>

              <div className="nearby-place-item">
                <div className="nearby-place-icon hospital">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="nearby-place-info">
                  <p className="nearby-place-name">City Hospital</p>
                  <p className="nearby-place-distance">3.2 miles</p>
                </div>
              </div>

              <div className="nearby-place-item">
                <div className="nearby-place-icon school">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="nearby-place-info">
                  <p className="nearby-place-name">Elementary School</p>
                  <p className="nearby-place-distance">0.8 miles</p>
                </div>
              </div>

              <div className="nearby-place-item">
                <div className="nearby-place-icon shopping">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="nearby-place-info">
                  <p className="nearby-place-name">Shopping Mall</p>
                  <p className="nearby-place-distance">2.1 miles</p>
                </div>
              </div>

              <div className="nearby-place-item">
                <div className="nearby-place-icon restaurant">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="nearby-place-info">
                  <p className="nearby-place-name">Restaurants</p>
                  <p className="nearby-place-distance">0.5 miles</p>
                </div>
              </div>

              <div className="nearby-place-item">
                <div className="nearby-place-icon park">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <div className="nearby-place-info">
                  <p className="nearby-place-name">City Park</p>
                  <p className="nearby-place-distance">1.3 miles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="property-details-actions">
            <button
              className="action-button-details schedule-details"
              onClick={() => navigate('/schedule-viewing', { state: { property } })}
            >
              <svg className="action-icon-details" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Viewing
            </button>
            <button
              className="action-button-details offer-details"
              onClick={() => navigate('/make-offer', { state: { property } })}
            >
              <svg className="action-icon-details" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Make an Offer
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {isFullscreen && (
        <div className="fullscreen-image-viewer" onClick={closeFullscreen}>
          <div className="fullscreen-image-container" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="fullscreen-close" onClick={closeFullscreen}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Fullscreen Image */}
            <img
              src={propertyImages[currentImageIndex]}
              alt={`${property.title || 'Property'} - Image ${currentImageIndex + 1}`}
              className="fullscreen-image"
            />

            {/* Navigation Buttons */}
            {hasMultipleImages && (
              <>
                <button 
                  className="fullscreen-nav-button prev-fullscreen"
                  onClick={handleFullscreenPrev}
                  aria-label="Previous image"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="fullscreen-nav-button next-fullscreen"
                  onClick={handleFullscreenNext}
                  aria-label="Next image"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image Counter */}
            {hasMultipleImages && (
              <div className="fullscreen-counter">
                {currentImageIndex + 1} / {propertyImages.length}
              </div>
            )}

            {/* Thumbnail Strip */}
            {hasMultipleImages && (
              <div className="fullscreen-thumbnails">
                {propertyImages.map((imageUrl, idx) => (
                  <img
                    key={idx}
                    src={imageUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    className={`fullscreen-thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
                    onClick={() => {
                      setCurrentImageIndex(idx)
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

