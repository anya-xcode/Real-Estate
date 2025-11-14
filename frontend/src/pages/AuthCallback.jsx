import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function AuthCallback() {
  const navigate = useNavigate()
  const message = 'Processing authentication...'

  const auth = useAuth()

  useEffect(() => {
    // Helper to parse both query and hash fragment
    const parseParams = () => {
      const params = new URLSearchParams(window.location.search)
      // also parse hash fragment (#key=val&...)
      if (window.location.hash && window.location.hash.startsWith('#')) {
        const hash = window.location.hash.substring(1)
        const hashParams = new URLSearchParams(hash)
        for (const [k, v] of hashParams.entries()) {
          if (!params.has(k)) params.set(k, v)
        }
      }
      return params
    }

    const params = parseParams()
    const token = params.get('token')
    const user = params.get('user')
    const error = params.get('error') || params.get('error_description')

    console.log('[AuthCallback] params:', Object.fromEntries(params.entries()))

    if (token) {
      try {
        auth.login(user ? JSON.parse(user) : null, token)
      } catch (e) {
        auth.login(null, token)
      }
      // successful login -> send user to home
      navigate('/', { replace: true })
      // fallback: if SPA navigation didn't work (router not ready), force a full redirect
      setTimeout(() => {
        if (window.location.pathname.includes('auth') || window.location.pathname.includes('callback')) {
          window.location.replace('/')
        }
      }, 800)
      return
    }

    if (user) {
      // backend returned user but no token -> store and send back to signup to complete
      try { localStorage.setItem('user', user) } catch { /* ignore */ }
      navigate('/signup', { replace: true })
      setTimeout(() => {
        if (window.location.pathname.includes('auth') || window.location.pathname.includes('callback')) {
          window.location.replace('/signup')
        }
      }, 800)
      return
    }

    // No token/user -> likely cancelled or error from provider. Redirect back to signup with message.
    const msg = error || 'Authentication cancelled or failed. Please try again.'
    navigate('/signup', { replace: true, state: { oauthError: msg } })
    setTimeout(() => {
      if (window.location.pathname.includes('auth') || window.location.pathname.includes('callback')) {
        window.location.replace('/signup')
      }
    }, 800)
  }, [navigate, auth])

  return (
    <div style={{ display: 'flex', minHeight: '60vh', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3>{message}</h3>
        <p>If you are not redirected, <a href="/signup">go back to signup</a>.</p>
      </div>
    </div>
  )
}
