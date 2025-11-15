import React, { useState } from 'react'
import PropertyCard from '../components/PropertyCard'
import ChatPanel from '../components/ChatPanel'
import Footer from '../components/Footer'
import './PropertyListing.css'

const dummyProperties = [
  {
    id: 1,
    title: 'Modern Family House',
    price: 1250000,
    address: '123 Maple Street, Springfield',
    beds: 4,
    baths: 3,
    area: 2800,
    image: 'https://media.architecturaldigest.com/photos/55e78c2fcd709ad62e8feef9/16:9/w_656,h_369,c_limit/dam-images-resources-2012-01-modern-family-sets-modern-family-01-jay-gloria-pritchett.jpg',
    type: 'House',
    featured: true,
    description: 'Beautiful modern family house with spacious rooms and a large backyard. Perfect for families looking for comfort and style.',
    amenities: ['Pool', 'Garage', 'Garden', 'Smart Home'],
    yearBuilt: 2020,
    agent: {
      name: 'John Smith',
      phone: '+1 234-567-8900',
      email: 'john@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 2,
    title: 'Downtown Apartment',
    price: 560000,
    address: '45 Cityview Ave, Metropolis',
    beds: 2,
    baths: 2,
    area: 1150,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    type: 'Apartment',
    featured: false,
    description: 'Sleek downtown apartment with stunning city views. Walking distance to restaurants, shops, and entertainment.',
    amenities: ['Gym', 'Concierge', 'Rooftop Terrace', 'Parking'],
    yearBuilt: 2019,
    agent: {
      name: 'Sarah Johnson',
      phone: '+1 234-567-8901',
      email: 'sarah@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 3,
    title: 'Cozy Countryside Cottage',
    price: 420000,
    address: '9 Willow Lane, Pleasantville',
    beds: 3,
    baths: 2,
    area: 1600,
    image: 'https://aihkcdnstoragep01.blob.core.windows.net/pgl-release/Images/ArticleImages/23/23216.jpg',
    type: 'Cottage',
    featured: false,
    description: 'Charming cottage nestled in the countryside. Escape the hustle and bustle with this peaceful retreat.',
    amenities: ['Fireplace', 'Large Yard', 'Workshop', 'Garden'],
    yearBuilt: 2015,
    agent: {
      name: 'Mike Davis',
      phone: '+1 234-567-8902',
      email: 'mike@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 4,
    title: 'Luxury Penthouse',
    price: 2980000,
    address: '88 Skyline Blvd, Uptown',
    beds: 3,
    baths: 4,
    area: 3400,
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    type: 'Penthouse',
    featured: true,
    description: 'Exclusive penthouse with breathtaking panoramic views. Top-of-the-line finishes and amenities throughout.',
    amenities: ['Private Elevator', 'Wine Cellar', 'Home Theater', 'Spa'],
    yearBuilt: 2021,
    agent: {
      name: 'Emily Chen',
      phone: '+1 234-567-8903',
      email: 'emily@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 5,
    title: 'Contemporary Villa',
    price: 1850000,
    address: '67 Ocean Drive, Coastal City',
    beds: 5,
    baths: 4,
    area: 4200,
    image: 'https://media.admiddleeast.com/photos/66decaec101edb7a36d3ae12/master/w_1600%2Cc_limit/AE_DXB_KuralVista_Ext_002_002_CG_HR.jpg',
    type: 'Villa',
    featured: false,
    description: 'Stunning oceanfront villa with direct beach access. Modern architecture meets coastal living.',
    amenities: ['Beach Access', 'Infinity Pool', 'Outdoor Kitchen', 'Sauna'],
    yearBuilt: 2018,
    agent: {
      name: 'David Martinez',
      phone: '+1 234-567-8904',
      email: 'david@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 6,
    title: 'Urban Loft',
    price: 750000,
    address: '12 Industrial Way, Downtown',
    beds: 2,
    baths: 2,
    area: 1800,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    type: 'Loft',
    featured: false,
    description: 'Converted industrial loft with exposed brick and high ceilings. Perfect for the urban professional.',
    amenities: ['High Ceilings', 'Exposed Brick', 'Floor-to-Ceiling Windows', 'Hardwood Floors'],
    yearBuilt: 2017,
    agent: {
      name: 'Lisa Anderson',
      phone: '+1 234-567-8905',
      email: 'lisa@realestate.com',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    }
  }
]

export default function PropertyListing() {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [filterType, setFilterType] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [searchQuery, setSearchQuery] = useState('')

  const propertyTypes = ['All', 'House', 'Apartment', 'Cottage', 'Penthouse', 'Villa', 'Loft']

  // Filter and sort properties (includes search)
  const filteredProperties = dummyProperties
    .filter(property => filterType === 'All' || property.type === filterType)
    .filter(property => {
      if (!searchQuery || searchQuery.trim() === '') return true
      const q = searchQuery.toLowerCase()
      return (
        property.title.toLowerCase().includes(q) ||
        property.address.toLowerCase().includes(q) ||
        property.type.toLowerCase().includes(q) ||
        property.agent.name.toLowerCase().includes(q)
      )
    })
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
                placeholder="Search by location, property name, agent, or type..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search properties"
              />
              {searchQuery && (
                <button
                  className="search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
            <button
              className="search-button"
              onClick={() => { /* search executes live while typing; keep for accessibility */ }}
            >
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
