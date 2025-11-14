import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import './Profile.css'

export default function Profile() {
  const auth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth.user) navigate('/signin')
  }, [auth.user, navigate])

  if (!auth.user) return null

  const { username, firstName, lastName, email, phone, avatar } = auth.user

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={avatar || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'}
            alt={username || firstName}
            className="profile-avatar"
          />
          <div>
            <h2 className="profile-name">{firstName ? `${firstName} ${lastName || ''}` : username}</h2>
            <p className="profile-username">@{username}</p>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-row">
            <span className="detail-label">Email</span>
            <span className="detail-value">{email}</span>
          </div>
          {phone && (
            <div className="detail-row">
              <span className="detail-label">Phone</span>
              <span className="detail-value">{phone}</span>
            </div>
          )}
          <div className="detail-row">
            <span className="detail-label">Member since</span>
            <span className="detail-value">{auth.user.createdAt ? new Date(auth.user.createdAt).toLocaleDateString() : '—'}</span>
          </div>
        </div>

        <div className="profile-actions">
          <button className="btn-primary" onClick={() => { auth.logout(); navigate('/') }}>Logout</button>
          <button className="btn-secondary" onClick={() => alert('Edit profile not implemented yet')}>Edit Profile</button>
        </div>
      </div>
    </div>
  )
}
