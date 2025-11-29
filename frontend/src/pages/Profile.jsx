import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import './Profile.css'

export default function Profile() {
  const auth = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [avatarImage, setAvatarImage] = useState(auth.user?.avatar || null)
  
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    memberSince: ''
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  
  const [savedProperties, setSavedProperties] = useState([])
  const [recentActivity, setRecentActivity] = useState([])
  const [loadingFavorites, setLoadingFavorites] = useState(true)

  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001'

  useEffect(() => {
    if (!auth.user) navigate('/signin')
    else {
      loadProfile()
      fetchFavorites()
      fetchActivity()
    }
  }, [auth.user, navigate])

  const loadProfile = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/profile`, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setUserInfo({
          firstName: data.user.firstName || '',
          lastName: data.user.lastName || '',
          email: data.user.email || '',
          phone: data.user.phone || '',
          location: data.user.location || '',
          bio: data.user.bio || '',
          memberSince: new Date(data.user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        })
        if (data.user.avatar) {
          setAvatarImage(data.user.avatar)
        }
      }
    } catch (error) {
      console.error('Error loading profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchFavorites = async () => {
    try {
      setLoadingFavorites(true)
      const response = await fetch(`${API_BASE_URL}/api/favorites`, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        }
      })
      if (response.ok) {
        const data = await response.json()
        setSavedProperties(data.favorites || [])
      }
    } catch (error) {
      console.error('Error fetching favorites:', error)
    } finally {
      setLoadingFavorites(false)
    }
  }

  const fetchActivity = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/activity`, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        }
      })
      if (response.ok) {
        const data = await response.json()
        setRecentActivity(data.activity || [])
      }
    } catch (error) {
      console.error('Error fetching activity:', error)
    }
  }

  const handleRemoveFavorite = async (favoriteId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/favorites/${favoriteId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${auth.token}`
        }
      })
      if (response.ok) {
        setSavedProperties(prev => prev.filter(fav => fav.id !== favoriteId))
      }
    } catch (error) {
      console.error('Error removing favorite:', error)
    }
  }

  if (!auth.user) return null
  if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSaveProfile = async () => {
    setSaving(true)
    try {
      const response = await fetch(`${API_BASE_URL}/api/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.token}`
        },
        body: JSON.stringify({
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          phone: userInfo.phone,
          location: userInfo.location,
          bio: userInfo.bio,
          avatar: avatarImage
        })
      })

      if (response.ok) {
        const data = await response.json()
        // Update auth context with new user data
        auth.login({ ...auth.user, ...data.user }, auth.token)
        setIsEditing(false)
        alert('Profile updated successfully!')
      } else {
        const error = await response.json()
        alert(error.message || 'Failed to update profile')
      }
    } catch (error) {
      console.error('Error updating profile:', error)
      alert('Failed to update profile. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const handleRemoveProperty = (propertyId) => {
    // Add logic to remove saved property
    console.log('Remove property:', propertyId)
  }

  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordData(prev => ({ ...prev, [name]: value }))
  }

  const handleChangePassword = async (e) => {
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

    try {
      const response = await fetch(`${API_BASE_URL}/api/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.token}`
        },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword
        })
      })

      if (response.ok) {
        alert('Password changed successfully!')
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        })
        setIsChangingPassword(false)
      } else {
        const error = await response.json()
        alert(error.message || 'Failed to change password')
      }
    } catch (error) {
      console.error('Error changing password:', error)
      alert('Failed to change password. Please try again.')
    }
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
        // Persist avatar in auth context so it survives refresh (stored in localStorage)
        try {
          if (auth && auth.login) {
            const updatedUser = { ...auth.user, avatar: reader.result }
            auth.login(updatedUser, auth.token)
          }
        } catch (err) {
          console.warn('Failed to update auth context with avatar', err)
        }
        console.log('Avatar updated in context/localStorage')
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
                    {loadingFavorites ? (
                      <div style={{ textAlign: 'center', padding: '2rem', gridColumn: '1 / -1' }}>Loading favorites...</div>
                    ) : savedProperties.length === 0 ? (
                      <div style={{ textAlign: 'center', padding: '2rem', gridColumn: '1 / -1', color: '#666' }}>
                        <p>No saved properties yet</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Properties you favorite will appear here</p>
                      </div>
                    ) : (
                      savedProperties.map(favorite => (
                        <div key={favorite.id} className="saved-property-card">
                          <div className="property-image-wrapper">
                            <img 
                              src={favorite.property.images?.[0]?.url || 'https://via.placeholder.com/400x300?text=No+Image'} 
                              alt={favorite.property.title} 
                            />
                            <button 
                              className="remove-btn"
                              onClick={() => handleRemoveFavorite(favorite.id)}
                            >
                              <svg fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                          <div className="property-details">
                            <h3 className="property-title">{favorite.property.title}</h3>
                            <p className="property-location">{favorite.property.address?.city || 'Location not specified'}</p>
                            <p className="property-price">${favorite.property.price?.toLocaleString() || 'N/A'}</p>
                            <p className="saved-date">Saved on {new Date(favorite.createdAt).toLocaleDateString()}</p>
                            <Link to={`/property/${favorite.property.id}`} className="view-property-btn">
                              View Details
                            </Link>
                          </div>
                        </div>
                      ))
                    )}
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
                    {recentActivity.length === 0 ? (
                      <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                        <p>No recent activity</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Your recent actions will appear here</p>
                      </div>
                    ) : (
                      recentActivity.map((item, index) => (
                        <div key={index} className="activity-item">
                          <div className="activity-icon">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="activity-details">
                            <p className="activity-action">
                              {item.action === 'favorite_added' ? 'Saved property' :
                               item.action === 'message_sent' ? 'Sent message' :
                               item.action === 'property_viewed' ? 'Viewed property' :
                               item.action}
                            </p>
                            {item.propertyTitle && <p className="activity-property">{item.propertyTitle}</p>}
                            <p className="activity-date">{new Date(item.createdAt).toLocaleDateString()}</p>
                          </div>
                        </div>
                      ))
                    )}
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
