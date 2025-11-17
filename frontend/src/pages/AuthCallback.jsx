import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function AuthCallback() {
  const navigate = useNavigate()
  const message = 'Processing authentication...'
  const auth = useAuth()
  const hasProcessed = useRef(false)

  useEffect(() => {
    // Prevent double execution
    if (hasProcessed.current) {
      console.log('[AuthCallback] Already processed, skipping')
      return
    }

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
    const userStr = params.get('user')
    const error = params.get('error') || params.get('error_description')

    console.log('[AuthCallback] Full URL:', window.location.href)
    console.log('[AuthCallback] Search:', window.location.search)
    console.log('[AuthCallback] params:', Object.fromEntries(params.entries()))
    console.log('[AuthCallback] token:', token ? 'EXISTS' : 'MISSING')
    console.log('[AuthCallback] user:', userStr ? 'EXISTS' : 'MISSING')
    console.log('[AuthCallback] error:', error)

    if (token && userStr) {
      hasProcessed.current = true
      console.log('[AuthCallback] Processing successful login')
      try {
        const user = JSON.parse(userStr)
        console.log('[AuthCallback] Parsed user:', user)
        auth.login(user, token)
      } catch (e) {
        console.error('[AuthCallback] Failed to parse user:', e)
        auth.login(null, token)
      }
      // successful login -> send user to home
      console.log('[AuthCallback] Navigating to home')
      navigate('/', { replace: true })
      return
    }

    if (userStr && !token) {
      hasProcessed.current = true
      console.log('[AuthCallback] Has user but no token, redirecting to signup')
      // backend returned user but no token -> store and send back to signup to complete
      try { localStorage.setItem('user', userStr) } catch { /* ignore */ }
      navigate('/signup', { replace: true })
      return
    }

    // No token/user -> likely cancelled or error from provider. Redirect back to signup with message.
    hasProcessed.current = true
    const msg = error || 'Authentication cancelled or failed. Please try again.'
    console.log('[AuthCallback] Auth failed, showing error:', msg)
    navigate('/signup', { replace: true, state: { oauthError: msg } })
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
