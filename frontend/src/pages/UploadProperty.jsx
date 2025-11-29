import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import './UploadProperty.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001'

export default function UploadProperty() {
  const navigate = useNavigate()
  const auth = useAuth()
  const [searchParams] = useSearchParams()
  const editPropertyId = searchParams.get('edit')
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    propertyType: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    beds: '',
    baths: '',
    area: '',
    yearBuilt: '',
    amenities: [],
    images: [],
    featured: false,
    instagram: '',
    youtube: ''
  })

  const [previewImages, setPreviewImages] = useState([])
  const [dragActive, setDragActive] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [existingImages, setExistingImages] = useState([])

  // Load property data if editing
  useEffect(() => {
    if (editPropertyId && auth.token) {
      loadPropertyData(editPropertyId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editPropertyId, auth.token])

  const loadPropertyData = async (propertyId) => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/api/properties/${propertyId}`, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        const property = data.property

        // Check if user is the owner
        if (property.ownerId !== auth.user.id) {
          setError('You are not authorized to edit this property')
          setTimeout(() => navigate('/properties'), 2000)
          return
        }

        setIsEditMode(true)
        setFormData({
          title: property.title || '',
          description: property.description || '',
          price: property.price || '',
          propertyType: property.propertyType || '',
          address: property.address?.street || '',
          city: property.address?.city || '',
          state: property.address?.state || '',
          zipCode: property.address?.zipCode || '',
          beds: property.beds || '0',
          baths: property.baths || '0',
          area: property.area || '0',
          yearBuilt: property.yearBuilt || '',
          amenities: property.amenities || [],
          images: [],
          featured: property.featured || false,
          instagram: property.instagram || '',
          youtube: property.youtube || ''
        })

        // Store existing images
        if (property.images && property.images.length > 0) {
          setExistingImages(property.images)
          setPreviewImages(property.images.map(img => img.url))
        }
      } else {
        setError('Failed to load property data')
        setTimeout(() => navigate('/properties'), 2000)
      }
    } catch (err) {
      console.error('Error loading property:', err)
      setError('Failed to load property data')
      setTimeout(() => navigate('/properties'), 2000)
    } finally {
      setLoading(false)
    }
  }

  // Verify authentication on mount
  useEffect(() => {
    const verifyAuth = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        setError('Please login to upload a property')
        setTimeout(() => navigate('/signin'), 2000)
        return
      }

      // Verify token is valid
      try {
        const response = await fetch(`${API_URL}/api/auth/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (!response.ok) {
          setError('Your session has expired. Please login again.')
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          auth.logout()
          setTimeout(() => navigate('/signin'), 2000)
        }
      } catch (err) {
        console.error('Auth verification error:', err)
        setError('Authentication error. Please login again.')
        setTimeout(() => navigate('/signin'), 2000)
      }
    }

    verifyAuth()
  }, [navigate, auth])

  const propertyTypes = ['House', 'Apartment', 'Cottage', 'Penthouse', 'Villa', 'Loft', 'Condo', 'Townhouse']
  
  const amenitiesList = [
    'Pool', 'Garage', 'Garden', 'Gym', 'Smart Home', 'Fireplace',
    'Balcony', 'Parking', 'Security System', 'Air Conditioning',
    'Heating', 'Dishwasher', 'Washer/Dryer', 'Hardwood Floors',
    'High Ceilings', 'Walk-in Closet', 'Pet Friendly', 'Furnished'
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleAmenityToggle = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }))
  }

  const handleImageUpload = (files) => {
    const newFiles = Array.from(files)
    const newPreviews = newFiles.map(file => URL.createObjectURL(file))
    
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newFiles]
    }))
    
    setPreviewImages(prev => [...prev, ...newPreviews])
  }

  const handleFileInputChange = (e) => {
    if (e.target.files) {
      handleImageUpload(e.target.files)
    }
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files)
    }
  }

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
    setPreviewImages(prev => prev.filter((_, i) => i !== index))
  }

  const nextStep = () => {
    // Validate required fields for each step
    if (currentStep === 1) {
      if (!formData.title || !formData.propertyType || !formData.description) {
        setError('Please fill in all required fields (Title, Property Type, and Description)')
        return
      }
    } else if (currentStep === 2) {
      if (!formData.price || !formData.address || !formData.city) {
        setError('Please fill in all required fields (Price, Address, and City)')
        return
      }
    } else if (currentStep === 3) {
      // Step 3 is now optional since these fields don't exist in the backend yet
      // You can skip validation or make it informational only
    }
    
    setError(null) // Clear any previous errors
    
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Check authentication
    const token = localStorage.getItem('token')
    if (!token) {
      setError('Please login to upload a property')
      setTimeout(() => navigate('/signin'), 2000)
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Step 1: Upload new images to Cloudinary (if any)
      let uploadedImages = []
      
      if (formData.images.length > 0) {
        const formDataImages = new FormData()
        formData.images.forEach((file) => {
          formDataImages.append('images', file)
        })

        const imageUploadResponse = await fetch(`${API_URL}/api/auth/upload-images`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: formDataImages
        })

        const imageData = await imageUploadResponse.json()

        if (!imageUploadResponse.ok) {
          if (imageUploadResponse.status === 401) {
            setError('Your session has expired. Please login again.')
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            auth.logout()
            setTimeout(() => navigate('/signin'), 2000)
            return
          }
          throw new Error(imageData.message || 'Failed to upload images')
        }

        uploadedImages = imageData.images
      }

      // Step 2: Prepare property data
      const propertyData = {
        title: formData.title,
        description: formData.description,
        price: parseFloat(formData.price),
        propertyType: formData.propertyType,
        address: {
          street: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          country: 'USA'
        },
        // In edit mode, keep existing images if no new ones uploaded
        images: uploadedImages.length > 0 ? uploadedImages : (isEditMode ? existingImages : []),
        instagram: formData.instagram || null,
        youtube: formData.youtube || null
      }

      // Step 3: Create or update property
      const url = isEditMode 
        ? `${API_URL}/api/properties/${editPropertyId}`
        : `${API_URL}/api/auth/properties`
      
      const method = isEditMode ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(propertyData)
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 401) {
          setError('Your session has expired. Please login again.')
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          auth.logout()
          setTimeout(() => navigate('/signin'), 2000)
          return
        }
        throw new Error(data.message || `Failed to ${isEditMode ? 'update' : 'create'} property`)
      }

      setSuccess(true)
      console.log(`Property ${isEditMode ? 'updated' : 'created'}:`, data.property)
      
      // Redirect to property listing after 2 seconds
      setTimeout(() => {
        navigate('/properties')
      }, 2000)

    } catch (err) {
      console.error(`Error ${isEditMode ? 'updating' : 'creating'} property:`, err)
      setError(err.message || `Failed to ${isEditMode ? 'update' : 'upload'} property. Please try again.`)
    } finally {
      setLoading(false)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.title && formData.description && formData.propertyType
      case 2:
        return formData.price && formData.address && formData.city
      case 3:
        // Make step 3 optional since these fields don't exist in the backend yet
        return true
      case 4:
        // In edit mode, allow existing images; in create mode, require new images
        return isEditMode ? (formData.images.length > 0 || existingImages.length > 0) : formData.images.length > 0
      default:
        return false
    }
  }

  return (
    <div className="upload-property-page">
      {/* Header */}
      <div className="upload-header">
        <div className="upload-header-content">
          <h1 className="upload-title">{isEditMode ? 'Edit Your Property' : 'List Your Property'}</h1>
          <p className="upload-subtitle">
            {isEditMode 
              ? 'Update your property information' 
              : 'Share your property with thousands of potential buyers'}
          </p>
        </div>
      </div>

      {/* Success Message */}
      {success && (
        <div className="notification success">
          <svg className="notification-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>Property {isEditMode ? 'updated' : 'uploaded'} successfully! Redirecting...</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="notification error">
          <svg className="notification-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>{error}</p>
        </div>
      )}

      {/* Progress Steps */}
      <div className="progress-container">
        <div className="progress-steps">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="progress-step-wrapper">
              <div className={`progress-step ${currentStep >= step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}>
                {currentStep > step ? (
                  <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <span>{step}</span>
                )}
              </div>
              <p className="progress-label">
                {step === 1 && 'Basic Info'}
                {step === 2 && 'Location & Price'}
                {step === 3 && 'Details'}
                {step === 4 && 'Photos'}
              </p>
              {step < 4 && <div className={`progress-line ${currentStep > step ? 'completed' : ''}`} />}
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-container">
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div className="form-step" key="step1">
              <h2 className="step-title">Basic Information</h2>
              <p className="step-description">Tell us about your property</p>

              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="title" className="form-label">
                    <svg className="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Property Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Modern Family House in Downtown"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="propertyType" className="form-label">
                    <svg className="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Property Type *
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select property type</option>
                    {propertyTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="description" className="form-label">
                    <svg className="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your property, its features, and what makes it special..."
                    className="form-textarea"
                    rows={5}
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="form-checkbox"
                    />
                    <span className="checkbox-text">Mark as Featured Property</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Location & Price */}
          {currentStep === 2 && (
            <div className="form-step" key="step2">
              <h2 className="step-title">Location & Pricing</h2>
              <p className="step-description">Where is your property located?</p>

              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="price" className="form-label">
                    <svg className="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Price (USD) *
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="e.g., 450000"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="address" className="form-label">
                    <svg className="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="e.g., 123 Main Street"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="city" className="form-label">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g., New York"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="state" className="form-label">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="e.g., NY"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="zipCode" className="form-label">ZIP Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="e.g., 10001"
                    className="form-input"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Property Details */}
          {currentStep === 3 && (
            <div className="form-step" key="step3">
              <h2 className="step-title">Property Details</h2>
              <p className="step-description">Provide additional details about your property (optional)</p>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="beds" className="form-label">
                    <svg className="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Bedrooms (Optional)
                  </label>
                  <input
                    type="number"
                    id="beds"
                    name="beds"
                    value={formData.beds}
                    onChange={handleInputChange}
                    placeholder="e.g., 3"
                    className="form-input"
                    min="0"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="baths" className="form-label">
                    <svg className="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1H21v6H3V3h7.5z" />
                    </svg>
                    Bathrooms (Optional)
                  </label>
                  <input
                    type="number"
                    id="baths"
                    name="baths"
                    value={formData.baths}
                    onChange={handleInputChange}
                    placeholder="e.g., 2"
                    className="form-input"
                    min="0"
                    step="0.5"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="area" className="form-label">
                    <svg className="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    Area (sqft) (Optional)
                  </label>
                  <input
                    type="number"
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    placeholder="e.g., 2500"
                    className="form-input"
                    min="0"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="yearBuilt" className="form-label">
                    <svg className="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Year Built
                  </label>
                  <input
                    type="number"
                    id="yearBuilt"
                    name="yearBuilt"
                    value={formData.yearBuilt}
                    onChange={handleInputChange}
                    placeholder="e.g., 2020"
                    className="form-input"
                    min="1800"
                    max={new Date().getFullYear()}
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label">
                    <svg className="label-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Amenities
                  </label>
                  <div className="amenities-selector">
                    {amenitiesList.map(amenity => (
                      <button
                        key={amenity}
                        type="button"
                        onClick={() => handleAmenityToggle(amenity)}
                        className={`amenity-chip ${formData.amenities.includes(amenity) ? 'selected' : ''}`}
                      >
                        {formData.amenities.includes(amenity) && (
                          <svg className="chip-check" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                        {amenity}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="form-group full-width social-media-section">
                  <h3 className="section-subtitle">Social Media Links (Optional)</h3>
                  <p className="section-description">Add your social media to showcase your property</p>
                </div>

                <div className="form-group">
                  <label htmlFor="instagram" className="form-label">
                    <svg className="label-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram Username
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleInputChange}
                    placeholder="e.g., mypropertypage"
                    className="form-input"
                  />
                  <small className="input-hint">Enter username only (without @)</small>
                </div>

                <div className="form-group">
                  <label htmlFor="youtube" className="form-label">
                    <svg className="label-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    YouTube Channel/Video ID
                  </label>
                  <input
                    type="text"
                    id="youtube"
                    name="youtube"
                    value={formData.youtube}
                    onChange={handleInputChange}
                    placeholder="e.g., channel_name or video_id"
                    className="form-input"
                  />
                  <small className="input-hint">Enter channel name or video ID</small>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Photos */}
          {currentStep === 4 && (
            <div className="form-step" key="step4">
              <h2 className="step-title">Property Photos</h2>
              <p className="step-description">Upload high-quality images of your property</p>

              <div className="upload-section">
                {/* Drop Zone */}
                <div
                  className={`drop-zone ${dragActive ? 'active' : ''}`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    id="fileInput"
                    multiple
                    accept="image/*"
                    onChange={handleFileInputChange}
                    className="file-input"
                  />
                  <label htmlFor="fileInput" className="drop-zone-label">
                    <svg className="upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <h3>Drag & Drop your images here</h3>
                    <p>or click to browse</p>
                    <span className="file-types">PNG, JPG, GIF up to 10MB</span>
                  </label>
                </div>

                {/* Image Previews */}
                {previewImages.length > 0 && (
                  <div className="image-previews">
                    <h3 className="previews-title">Uploaded Images ({previewImages.length})</h3>
                    <div className="previews-grid">
                      {previewImages.map((preview, index) => (
                        <div key={index} className="preview-item">
                          <img src={preview} alt={`Preview ${index + 1}`} className="preview-image" />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="remove-image"
                          >
                            <svg fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                          {index === 0 && (
                            <div className="primary-badge">Primary</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="form-navigation">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="nav-button secondary"
              >
                <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!isStepValid()}
                className="nav-button primary"
              >
                Next
                <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                disabled={!isStepValid() || loading}
                className="nav-button submit"
              >
                {loading ? (
                  <>
                    <div className="button-spinner" />
                    {isEditMode ? 'Updating...' : 'Uploading...'}
                  </>
                ) : (
                  <>
                    <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {isEditMode ? 'Update Property' : 'Submit Property'}
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}
