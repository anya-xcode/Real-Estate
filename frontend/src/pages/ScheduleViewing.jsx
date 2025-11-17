import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import './ScheduleViewing.css'

export default function ScheduleViewing() {
  const location = useLocation()
  const navigate = useNavigate()
  const property = location.state?.property || null

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [place, setPlace] = useState('')
  const [message, setMessage] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [error, setError] = useState('')

  const auth = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!name || !email || !date || !time) {
      setError('Please complete name, email, date and time before proceeding.')
      return
    }
    setShowPreview(true)
  }

  const handleConfirm = () => {
    const payload = {
      propertyId: property?.id,
      propertyTitle: property?.title,
      name,
      email,
      phone,
      date,
      time,
      place,
      message,
    }
    console.log('Schedule viewing payload', payload)
    alert('Your viewing request has been submitted. The agent will contact you soon.')
    navigate('/properties')
  }

  // Format address from object
  const getAddressString = (address) => {
    if (!address) return 'Address not available'
    if (typeof address === 'string') return address
    const { street, city, state, zipCode } = address
    return `${street || ''}, ${city || ''}, ${state || ''} ${zipCode || ''}`.replace(/,\s*,/g, ',').trim()
  }

  return (
    <div className="page-container small">
      <h1>Schedule Viewing</h1>
      {property && (
        <div className="property-summary">
          <img src={property.image} alt={property.title} />
          <div>
            <h3>{property.title}</h3>
            <p className="muted">{getAddressString(property.address)}</p>
          </div>
        </div>
      )}

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Your name
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Phone
          <input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          Preferred meeting place (address / online link)
          <input value={place} onChange={(e) => setPlace(e.target.value)} placeholder="e.g. 123 Main St or Zoom link" />
        </label>
        <div className="form-row">
          <label>
            Date
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </label>
          <label>
            Time
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
          </label>
        </div>

        <div className="quick-slots">
          <small>Quick slots</small>
          <div className="slot-buttons">
            {['09:00','10:30','12:00','14:00','15:30','17:00'].map(s => (
              <button key={s} type="button" className={`slot ${time===s? 'active':''}`} onClick={() => setTime(s)}>{s}</button>
            ))}
          </div>
        </div>
        <label>
          Message (optional)
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        {error && <p className="error">{error}</p>}
        <div className="form-actions">
          <button type="submit" className="btn primary">Review Details</button>
          <button type="button" className="btn" onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </form>

      {showPreview && (
        <div className="preview">
          <h3>Confirm viewing request</h3>
          <p><strong>Property:</strong> {property?.title}</p>
          <p><strong>Date & Time:</strong> {date} {time}</p>
          {place && <p><strong>Place:</strong> {place}</p>}
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          {phone && <p><strong>Phone:</strong> {phone}</p>}
          {message && (
            <div>
              <strong>Note:</strong>
              <p className="muted">{message}</p>
            </div>
          )}
          <div className="form-actions">
            <button className="btn primary" onClick={handleConfirm}>Confirm & Send</button>
            <button className="btn" onClick={() => setShowPreview(false)}>Back</button>
          </div>
        </div>
      )}
    </div>
  )
}
