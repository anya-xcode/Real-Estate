import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import './Profile.css'

export default function Profile() {
  const auth = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [avatarImage, setAvatarImage] = useState(null)
  
  const [userInfo, setUserInfo] = useState({
    firstName: auth.user?.firstName || 'John',
    lastName: auth.user?.lastName || 'Doe',
    email: auth.user?.email || 'john.doe@example.com',
    phone: '+91 98765 43210',
    location: 'Mumbai, Maharashtra',
    bio: 'Looking for a 3BHK apartment in Mumbai suburbs',
    memberSince: 'January 2024'
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  // Mock saved properties
  const savedProperties = [
    {
      id: 1,
      title: 'Modern Family House',
      price: '$1,250,000',
      location: 'Springfield',
      image: 'https://media.architecturaldigest.com/photos/55e78c2fcd709ad62e8feef9/16:9/w_656,h_369,c_limit/dam-images-resources-2012-01-modern-family-sets-modern-family-01-jay-gloria-pritchett.jpg',
      savedDate: '2024-10-15'
    },
    {
      id: 2,
      title: 'Downtown Apartment',
      price: '$560,000',
      location: 'Metropolis',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=60',
      savedDate: '2024-10-20'
    },
    {
      id: 3,
      title: 'Luxury Penthouse',
      price: '$2,980,000',
      location: 'Uptown',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=60',
      savedDate: '2024-11-01'
    }
  ]

  // Mock recent activity
  const recentActivity = [
    { action: 'Saved property', property: 'Luxury Penthouse', date: '2 days ago' },
    { action: 'Viewed property', property: 'Downtown Apartment', date: '5 days ago' },
    { action: 'Contacted agent', property: 'Modern Family House', date: '1 week ago' },
    { action: 'Updated profile', property: null, date: '2 weeks ago' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSaveProfile = () => {
    setIsEditing(false)
    // Add API call to save profile
    alert('Profile updated successfully!')
  }

  const handleRemoveProperty = (propertyId) => {
    // Add logic to remove saved property
    console.log('Remove property:', propertyId)
  }

  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordData(prev => ({ ...prev, [name]: value }))
  }

  const handleChangePassword = (e) => {
    e.preventDefault()
    
    // Validation
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      alert('Please fill in all password fields')
      return
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New password and confirm password do not match')
      return
    }

    if (passwordData.newPassword.length < 8) {
      alert('New password must be at least 8 characters long')
      return
    }

    // Add API call to change password
    console.log('Changing password...')
    alert('Password changed successfully!')
    
    // Reset form
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
    setIsChangingPassword(false)
  }

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file')
        return
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB')
        return
      }

      // Create a preview URL
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarImage(reader.result)
        // Add API call to upload avatar to server
        console.log('Uploading avatar...')
        alert('Profile photo updated successfully!')
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    document.getElementById('avatar-upload-input').click()
  }

  return (
    <div className="profile-page">
      {/* Profile Header */}
      <section className="profile-header">
        <div className="container">
          <div className="profile-header-content">
            <div className="profile-avatar-section">
              <div className="profile-avatar">
                {avatarImage ? (
                  <img src={avatarImage} alt="Profile" className="avatar-image" />
                ) : (
                  <span className="avatar-initials">
                    {userInfo.firstName.charAt(0)}{userInfo.lastName.charAt(0)}
                  </span>
                )}
                <input 
                  type="file" 
                  id="avatar-upload-input" 
                  accept="image/*" 
                  onChange={handleAvatarUpload}
                  style={{ display: 'none' }}
                />
                <button className="avatar-edit-btn" onClick={triggerFileInput}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
              <div className="profile-info">
                <h1 className="profile-name">{userInfo.firstName} {userInfo.lastName}</h1>
                <p className="profile-member-since">Member since {userInfo.memberSince}</p>
              </div>
            </div>
            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-number">{savedProperties.length}</span>
                <span className="stat-label">Saved Properties</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12</span>
                <span className="stat-label">Properties Viewed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Inquiries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="profile-content">
        <div className="container">
          <div className="profile-layout">
            {/* Sidebar Navigation */}
            <aside className="profile-sidebar">
              <nav className="profile-nav">
                <button 
                  className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Overview
                </button>
                <button 
                  className={`nav-item ${activeTab === 'saved' ? 'active' : ''}`}
                  onClick={() => setActiveTab('saved')}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Saved Properties
                </button>
                <button 
                  className={`nav-item ${activeTab === 'activity' ? 'active' : ''}`}
                  onClick={() => setActiveTab('activity')}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Activity
                </button>
                <button 
                  className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('settings')}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </button>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="profile-main">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="tab-content">
                  <div className="content-header">
                    <h2 className="content-title">Account Overview</h2>
                    <p className="content-subtitle">Manage your profile and preferences</p>
                  </div>

                  <div className="overview-grid">
                    {/* Personal Information Card */}
                    <div className="info-card">
                      <div className="card-header">
                        <h3 className="card-title">Personal Information</h3>
                        <button 
                          className="edit-btn"
                          onClick={() => setIsEditing(!isEditing)}
                        >
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          {isEditing ? 'Cancel' : 'Edit'}
                        </button>
                      </div>
                      <div className="card-body">
                        {isEditing ? (
                          <div className="edit-form">
                            <div className="form-row">
                              <div className="form-group">
                                <label>First Name</label>
                                <input 
                                  type="text" 
                                  name="firstName"
                                  value={userInfo.firstName}
                                  onChange={handleInputChange}
                                />
                              </div>
                              <div className="form-group">
                                <label>Last Name</label>
                                <input 
                                  type="text" 
                                  name="lastName"
                                  value={userInfo.lastName}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Email</label>
                              <input 
                                type="email" 
                                name="email"
                                value={userInfo.email}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="form-group">
                              <label>Phone</label>
                              <input 
                                type="tel" 
                                name="phone"
                                value={userInfo.phone}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="form-group">
                              <label>Location</label>
                              <input 
                                type="text" 
                                name="location"
                                value={userInfo.location}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="form-group">
                              <label>Bio</label>
                              <textarea 
                                name="bio"
                                value={userInfo.bio}
                                onChange={handleInputChange}
                                rows="3"
                              />
                            </div>
                            <button className="save-btn" onClick={handleSaveProfile}>
                              Save Changes
                            </button>
                          </div>
                        ) : (
                          <div className="info-list">
                            <div className="info-item">
                              <span className="info-label">Name</span>
                              <span className="info-value">{userInfo.firstName} {userInfo.lastName}</span>
                            </div>
                            <div className="info-item">
                              <span className="info-label">Email</span>
                              <span className="info-value">{userInfo.email}</span>
                            </div>
                            <div className="info-item">
                              <span className="info-label">Phone</span>
                              <span className="info-value">{userInfo.phone}</span>
                            </div>
                            <div className="info-item">
                              <span className="info-label">Location</span>
                              <span className="info-value">{userInfo.location}</span>
                            </div>
                            <div className="info-item">
                              <span className="info-label">Bio</span>
                              <span className="info-value">{userInfo.bio}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Quick Actions Card */}
                    <div className="info-card">
                      <div className="card-header">
                        <h3 className="card-title">Quick Actions</h3>
                      </div>
                      <div className="card-body">
                        <div className="quick-actions">
                          <Link to="/properties" className="action-btn">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Browse Properties
                          </Link>
                          <Link to="/upload" className="action-btn">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            List Property
                          </Link>
                          <Link to="/home-loans" className="action-btn">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Explore Loans
                          </Link>
                          <Link to="/contact" className="action-btn">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contact Agent
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Saved Properties Tab */}
              {activeTab === 'saved' && (
                <div className="tab-content">
                  <div className="content-header">
                    <h2 className="content-title">Saved Properties</h2>
                    <p className="content-subtitle">Properties you've saved for later</p>
                  </div>

                  <div className="saved-properties-grid">
                    {savedProperties.map(property => (
                      <div key={property.id} className="saved-property-card">
                        <div className="property-image-wrapper">
                          <img src={property.image} alt={property.title} />
                          <button 
                            className="remove-btn"
                            onClick={() => handleRemoveProperty(property.id)}
                          >
                            <svg fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                        <div className="property-details">
                          <h3 className="property-title">{property.title}</h3>
                          <p className="property-location">{property.location}</p>
                          <p className="property-price">{property.price}</p>
                          <p className="saved-date">Saved on {new Date(property.savedDate).toLocaleDateString()}</p>
                          <Link to={`/properties/${property.id}`} className="view-property-btn">
                            View Details
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Activity Tab */}
              {activeTab === 'activity' && (
                <div className="tab-content">
                  <div className="content-header">
                    <h2 className="content-title">Recent Activity</h2>
                    <p className="content-subtitle">Your recent actions and interactions</p>
                  </div>

                  <div className="activity-list">
                    {recentActivity.map((item, index) => (
                      <div key={index} className="activity-item">
                        <div className="activity-icon">
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="activity-details">
                          <p className="activity-action">{item.action}</p>
                          {item.property && <p className="activity-property">{item.property}</p>}
                          <p className="activity-date">{item.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="tab-content">
                  <div className="content-header">
                    <h2 className="content-title">Account Settings</h2>
                    <p className="content-subtitle">Manage your account preferences</p>
                  </div>

                  <div className="settings-sections">
                    {/* Change Password */}
                    <div className="settings-card">
                      <div className="card-header">
                        <h3 className="settings-title">Change Password</h3>
                        {!isChangingPassword && (
                          <button 
                            className="edit-btn"
                            onClick={() => setIsChangingPassword(true)}
                          >
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Change
                          </button>
                        )}
                      </div>
                      
                      {isChangingPassword ? (
                        <form className="password-change-form" onSubmit={handleChangePassword}>
                          <div className="form-group">
                            <label>Current Password</label>
                            <input
                              type="password"
                              name="currentPassword"
                              value={passwordData.currentPassword}
                              onChange={handlePasswordChange}
                              placeholder="Enter current password"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>New Password</label>
                            <input
                              type="password"
                              name="newPassword"
                              value={passwordData.newPassword}
                              onChange={handlePasswordChange}
                              placeholder="Enter new password (min 8 characters)"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Confirm New Password</label>
                            <input
                              type="password"
                              name="confirmPassword"
                              value={passwordData.confirmPassword}
                              onChange={handlePasswordChange}
                              placeholder="Confirm new password"
                              required
                            />
                          </div>
                          <div className="form-actions">
                            <button type="submit" className="save-btn">
                              Update Password
                            </button>
                            <button 
                              type="button" 
                              className="cancel-btn"
                              onClick={() => {
                                setIsChangingPassword(false)
                                setPasswordData({
                                  currentPassword: '',
                                  newPassword: '',
                                  confirmPassword: ''
                                })
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      ) : (
                        <p className="password-info">
                          For your security, we recommend changing your password regularly. Your password must be at least 8 characters long.
                        </p>
                      )}
                    </div>

                    {/* Delete Account */}
                    <div className="settings-card">
                      <h3 className="settings-title">Delete Account</h3>
                      <p className="delete-warning">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <button className="settings-action-btn danger">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}
