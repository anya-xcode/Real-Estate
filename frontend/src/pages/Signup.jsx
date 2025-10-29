import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
import './signup.css';

export default function Signup() {
  const [form, setForm] = useState({ username: '', firstName: '', lastName: '', email: '', password: '' });
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth()

  function validate() {
    const errs = [];
    if (!form.username || form.username.length < 3 || form.username.length > 20) {
      errs.push('Username must be between 3 and 20 characters.');
    }
    // firstName is required per schema
    if (!form.firstName || form.firstName.length < 2) {
      errs.push('First name is required and must be at least 2 characters.');
    }
    if (form.lastName && form.lastName.length < 2) {
      errs.push('Last name must be at least 2 characters if provided.');
    }
    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(form.email)) {
      errs.push('Enter a valid email address.');
    }
    if (!form.password || form.password.length < 6) {
      errs.push('Password must be at least 6 characters.');
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(form.password)) {
      errs.push('Password must contain at least one lowercase letter, one uppercase letter and one number.');
    }
    // no avatar field in schema; nothing to validate here
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors([])
    setMessage(null)
    const errs = validate()
    if (errs.length) {
      setErrors(errs)
      return
    }

    setLoading(true)
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        if (data && data.errors) {
          setErrors(data.errors.map((e) => e.msg || JSON.stringify(e)))
        } else if (data && data.message) {
          setErrors([data.message])
        } else {
          setErrors(['Signup failed.'])
        }
      } else {
        // If backend returns token (auto-login), store and navigate
        if (data.token) {
          auth.login(data.user || null, data.token)
          navigate('/')
          return
        }

        setMessage(data.message || 'Signup successful. You can now log in.')
        setForm({ username: '', firstName: '', lastName: '', email: '', password: '' })
      }
    } catch (err) {
      setErrors([err.message || 'Network error'])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="signup-root">
      <div className="signup-left">
        <h1 className="welcome-text">Welcome Back!</h1>
        <p>Enter your personal details to use all of site features</p>
        <button className="signin-button" onClick={() => navigate('/signin')}>SIGN IN</button>
      </div>
      
      <div className="signup-right">
        <h2>Create Account</h2>
        <div className="signin-subtext">Or continue with a social account</div>
        <div className="social-buttons" style={{display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem'}}>
          <button
            type="button"
            className="social-button google"
            onClick={() => { const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'; window.location.href = `${API_URL}/api/auth/google` }}
            aria-label="Sign up with Google"
          >
            <span className="g-icon" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="M533.5 278.4c0-18.5-1.6-36.3-4.7-53.6H272v101.6h146.9c-6.4 34.4-24.9 63.6-53.1 83v68.9h85.7c50.2-46.3 79-114.5 79-200.9z"/><path fill="#34a853" d="M272 544.3c72.6 0 133.6-24 178.2-65.4l-85.7-68.9c-23.8 16-54.4 25.4-92.5 25.4-71 0-131.1-47.9-152.6-112.4H35.6v70.6C80.6 487 168.5 544.3 272 544.3z"/><path fill="#fbbc04" d="M119.4 324.9c-10.6-31.8-10.6-66 0-97.8V156.5H35.6c-39.6 77.3-39.6 169.3 0 246.6l83.8-78.2z"/><path fill="#ea4335" d="M272 107.7c38.5 0 73.1 13.3 100.3 39.3l75-75C405.4 24.3 344.4 0 272 0 168.5 0 80.6 57.3 35.6 139.1l83.8 70.6C140.9 155.6 201 107.7 272 107.7z"/></svg>
            </span>
            <span className="social-text">Sign up with Google</span>
          </button>
        </div>
        
        {message && <div className="signup-success">{message}</div>}
        {errors.length > 0 && (
          <div className="signup-errors">
            <ul>
              {errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            placeholder="First name"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            required
            minLength={2}
          />

          <input
            type="text"
            placeholder="Last name (optional)"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />

          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
            minLength={3}
            maxLength={20}
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            minLength={6}
          />

          {/* avatar removed from schema - not collected */}

          <button type="submit" disabled={loading}>
            {loading ? 'Signing up…' : 'SIGN UP'}
          </button>
        </form>
        <p className="signup-hint" onClick={() => navigate('/signin')} style={{cursor: 'pointer', textDecoration: 'underline'}}>Already have an account? Sign in</p>
      </div>
    </div>
  );
}