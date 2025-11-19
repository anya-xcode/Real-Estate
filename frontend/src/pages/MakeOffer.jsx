import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import './MakeOffer.css'

export default function MakeOffer() {
  const location = useLocation()
  const navigate = useNavigate()
  const property = location.state?.property || null

  const auth = useAuth()

  // Get address string from address object or fallback
  const getAddressString = () => {
    if (property?.address) {
      if (typeof property.address === 'string') {
        return property.address
      }
      const { street, city, state, zipCode } = property.address
      return `${street || ''}, ${city || ''}, ${state || ''} ${zipCode || ''}`.replace(/,\s*,/g, ',').trim()
    }
    return 'Address not available'
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState('') // store as string
  const [message, setMessage] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [error, setError] = useState('')
  const [inputCurrency, setInputCurrency] = useState('INR')
  const [targetCurrency, setTargetCurrency] = useState('USD')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    // simple validation
    const numeric = parseFloat(String(amount).replace(/[^0-9.]/g, ''))
    if (!numeric || numeric <= 0) {
      setError('Please enter a valid offer amount greater than 0.')
      return
    }
    // show preview first
    setShowPreview(true)
  }

  const handleConfirm = () => {
    const numeric = parseFloat(String(amount).replace(/[^0-9.]/g, ''))
    const payload = {
      propertyId: property?.id,
      propertyTitle: property?.title,
      name,
      email,
      amount: numeric,
      message,
    }
    console.log('Make offer payload', payload)
    alert('Your offer has been submitted. The agent will respond shortly.')
    navigate('/properties')
  }

  // Prefill from auth if available
  useEffect(() => {
    if (auth?.user) {
      if (!name) setName(auth.user.username || auth.user.firstName || '')
      if (!email) setEmail(auth.user.email || '')
    }
  }, [auth, name, email])

  // Static exchange rates (1 INR -> X currency). These are approximate and can be replaced with live rates.
  const ratesFromINR = {
    INR: 1,
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.009,
    AED: 0.044,
    AUD: 0.018,
    CAD: 0.015,
    SGD: 0.016,
    JPY: 1.74,
  }

  const currencies = [
    { code: 'INR', label: 'India (INR) ₹' },
    { code: 'USD', label: 'United States (USD) $' },
    { code: 'EUR', label: 'Euro (EUR) €' },
    { code: 'GBP', label: 'United Kingdom (GBP) £' },
    { code: 'AED', label: 'UAE (AED) د.إ' },
    { code: 'AUD', label: 'Australia (AUD) $' },
    { code: 'CAD', label: 'Canada (CAD) $' },
    { code: 'SGD', label: 'Singapore (SGD) $' },
    { code: 'JPY', label: 'Japan (JPY) ¥' },
  ]

  const convert = (value, from, to) => {
    const v = Number(String(value).replace(/[^0-9.]/g, '')) || 0
    if (from === to) return v
    const rateFrom = ratesFromINR[from] || 1
    const rateTo = ratesFromINR[to] || 1
    // convert value -> INR -> target
    const valueInINR = v / rateFrom
    const valueInTarget = valueInINR * rateTo
    return valueInTarget
  }

  return (
    <div className="page-container small">
      <h1>Make an Offer</h1>
      {property && (
        <div className="property-summary">
          <img src={property.image || property.images?.[0]?.url || 'https://via.placeholder.com/400x300?text=No+Image'} alt={property.title} />
          <div>
            <h3>{property.title}</h3>
            <p className="muted">{getAddressString()}</p>
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

        {property?.agent && (
          <div className="agent-inline">
            <img src={property.agent.avatar} alt={property.agent.name} className="agent-inline-avatar" />
            <div>
              <div className="muted">Listing Agent</div>
              <strong>{property.agent.name}</strong>
            </div>
          </div>
        )}

        {property?.price && (
          <div className="price-suggest">
            <small>Suggested offers</small>
            <div className="suggest-buttons">
              <button type="button" className="chip" onClick={() => setAmount(Math.round(property.price * 0.95))}>
                95% ({new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(property.price*0.95)})
              </button>
              <button type="button" className="chip" onClick={() => setAmount(Math.round(property.price))}>
                100% ({new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(property.price)})
              </button>
              <button type="button" className="chip" onClick={() => setAmount(Math.round(property.price * 1.05))}>
                105% ({new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(property.price*1.05)})
              </button>
            </div>
          </div>
        )}

        <label>
          Offer currency & amount
          <div className="currency-row">
            <select value={inputCurrency} onChange={(e) => setInputCurrency(e.target.value)}>
              {currencies.map(c => (
                <option key={c.code} value={c.code}>{c.label}</option>
              ))}
            </select>
            <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
              {currencies.map(c => (
                <option key={c.code} value={c.code}>{c.code}</option>
              ))}
            </select>
          </div>
          <input
            inputMode="numeric"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter offer amount"
            required
          />
          <div className="helper">
            {amount ? (
              <>
                {new Intl.NumberFormat('en-US',{style:'currency',currency: inputCurrency==='INR'? 'INR' : 'USD', maximumFractionDigits:2}).format(Number(String(amount).replace(/[^0-9.]/g,'' ) || 0))}
                {' '}→{' '}
                {new Intl.NumberFormat('en-US',{style:'currency',currency: targetCurrency==='INR'? 'INR' : 'USD', maximumFractionDigits:2}).format(convert(amount, inputCurrency, targetCurrency))}
                {property?.price && Number(String(amount).replace(/[^0-9.]/g,'' )) > 0 && (
                  (() => {
                    try {
                      // convert entered amount to USD for comparison (assume property.price is in USD)
                      const enteredInUSD = convert(amount, inputCurrency, 'USD')
                      const pct = property.price > 0 ? (enteredInUSD / property.price) * 100 : 0
                      const diff = pct - 100
                      const sign = diff >= 0 ? '+' : '-'
                      const absDiff = Math.abs(diff)
                      return (
                        <span style={{marginLeft:12, color: diff>=0 ? '#059669' : '#b91c1c', fontWeight:700}}>
                          {pct.toFixed(1)}% of listing ({sign}{absDiff.toFixed(1)}%)
                        </span>
                      )
                    } catch (err) { return null }
                  })()
                )}
              </>
            ) : ''}
          </div>
        </label>

        <label>
          Message (optional)
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>

        {error && <p className="error">{error}</p>}

        <div className="form-actions">
          <button type="submit" className="btn primary">Review Offer</button>
          <button type="button" className="btn" onClick={() => navigate(-1)}>Cancel</button>
        </div>
      </form>

      {showPreview && (
        <div className="preview">
          <h3>Review your offer</h3>
          <p><strong>Property:</strong> {property?.title}</p>
          <p><strong>Offer:</strong> {new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(Number(String(amount).replace(/[^0-9.]/g,'' ) || 0))}</p>
          {property?.price && (
            (() => {
              try {
                const enteredInUSD = convert(amount, inputCurrency, 'USD')
                const pct = property.price > 0 ? (enteredInUSD / property.price) * 100 : 0
                const diff = pct - 100
                const sign = diff >= 0 ? '+' : '-'
                const absDiff = Math.abs(diff)
                return (
                  <p><strong>Relative to listing:</strong> {pct.toFixed(1)}% ({sign}{absDiff.toFixed(1)}%)</p>
                )
              } catch (err) { return null }
            })()
          )}
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          {message && (
            <div>
              <strong>Message:</strong>
              <p className="muted">{message}</p>
            </div>
          )}
          <div className="form-actions">
            <button className="btn primary" onClick={handleConfirm}>Confirm & Submit</button>
            <button className="btn" onClick={() => setShowPreview(false)}>Back</button>
          </div>
        </div>
      )}
    </div>
  )
}
