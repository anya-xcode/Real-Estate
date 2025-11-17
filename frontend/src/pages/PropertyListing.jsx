import React, { useState, useEffect } from 'react'
import PropertyCard from '../components/PropertyCard'
import ChatPanel from '../components/ChatPanel'
import Footer from '../components/Footer'
import './PropertyListing.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001'

export default function PropertyListing() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [filterType, setFilterType] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  const propertyTypes = ['All', 'House', 'Apartment', 'Cottage', 'Penthouse', 'Villa', 'Loft']

  // Fetch properties from backend
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${API_URL}/api/auth/properties`)
        const data = await res.json()
        
        if (!res.ok) {
          throw new Error(data.message || 'Failed to fetch properties')
        }
        
        setProperties(data.properties || [])
      } catch (err) {
        console.error('Error fetching properties:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  // Filter and sort properties
  const filteredProperties = properties
    .filter(property => filterType === 'All' || property.type === filterType)
    .sort((a, b) => {
      if (sortBy === 'featured') {
        return b.featured - a.featured
      } else if (sortBy === 'price-low') {
        return a.price - b.price
      } else if (sortBy === 'price-high') {
        return b.price - a.price
      }
      return 0
    })

  const handleConnectClick = (property) => {
    setSelectedProperty(property)
    setIsChatOpen(true)
  }

  // Loading state
  if (loading) {
    return (
      <div className="property-listing-page">
        <div className="loading-container" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '60vh',
          gap: '1rem' 
        }}>
          <div className="loading-spinner" style={{
            width: '50px',
            height: '50px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Loading properties...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="property-listing-page">
        <div className="error-container" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          gap: '1rem',
          padding: '2rem'
        }}>
          <svg style={{ width: '64px', height: '64px', color: '#e74c3c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 style={{ fontSize: '1.5rem', color: '#333' }}>Error Loading Properties</h3>
          <p style={{ color: '#666' }}>{error}</p>
          <p style={{ color: '#999', fontSize: '0.9rem' }}>No properties available yet. Please add some properties first.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="property-listing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Home</h1>
          <p className="hero-subtitle">Discover the perfect property from our exclusive collection</p>
          
          {/* Search Bar */}
          <div className="search-bar">
            <div className="search-input-wrapper">
              <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Search by location, property name, or type..." 
                className="search-input"
              />
            </div>
            <button className="search-button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-bar">
            <div className="filter-tabs">
              {propertyTypes.map(type => (
                <button
                  key={type}
                  className={`filter-tab ${filterType === type ? 'active' : ''}`}
                  onClick={() => setFilterType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
            
            <div className="sort-dropdown">
              <label htmlFor="sort" className="sort-label">Sort by:</label>
              <select 
                id="sort"
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="results-count">
            <span>{filteredProperties.length} properties found</span>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="properties-section">
        <div className="container">
          <div className="properties-grid">
            {filteredProperties.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={index}
                onConnectClick={handleConnectClick}
              />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="no-results">
              <svg className="no-results-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3>No properties found</h3>
              <p>Try adjusting your filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Chat Panel */}
      <ChatPanel
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        property={selectedProperty}
      />

      {/* Footer */}
      <Footer />
    </div>
  )
}
