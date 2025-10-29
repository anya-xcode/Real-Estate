import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function AuthCallback() {
  const navigate = useNavigate()
  const message = 'Processing authentication...'

  const auth = useAuth()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')
    const user = params.get('user')

    if (token) {
      auth.login(user ? JSON.parse(user) : null, token)
    } else if (user) {
      // if backend only sends user, store it
      try { localStorage.setItem('user', user) } catch { /* ignore */ }
    }

    // small delay so users see the message and then redirect home
    setTimeout(() => {
      navigate('/')
    }, 800)
  }, [navigate, auth])

  return (
    <div style={{ display: 'flex', minHeight: '60vh', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3>{message}</h3>
        <p>If you are not redirected, <a href="/">click here</a>.</p>
      </div>
    </div>
  )
}
