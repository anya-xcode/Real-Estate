import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css';
import useAuth from '../hooks/useAuth'

export default function Signin() {
  // accept username OR email as identifier
  const [form, setForm] = useState({ identifier: '', password: '' });
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth()

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    
    if (!form.identifier || !form.password) {
      setErrors(['Please fill in all fields']);
      return;
    }

    setLoading(true);
    try {
      // send identifier (username or email) and password
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001'
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: form.identifier, password: form.password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors([data.message || 'Sign in failed']);
      } else {
        // Handle successful sign in
        if (data.token) {
          auth.login(data.user || null, data.token)
        }
        console.log('Signed in successfully', data);
        navigate('/')
      }
    } catch (error) {
      setErrors([error.message || 'Network error']);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="signin-root">
      <div className="signin-left">
        <h2>Sign In</h2>
        <div className="signin-subtext">Sign in with your account or continue with a social provider</div>
        <div className="social-buttons">
          <button
            type="button"
            className="social-button google"
            onClick={() => { const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001'; window.location.href = `${API_URL}/api/auth/google` }}
            aria-label="Sign in with Google"
          >
            <span className="g-icon" aria-hidden>
              <svg width="18" height="18" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="M533.5 278.4c0-18.5-1.6-36.3-4.7-53.6H272v101.6h146.9c-6.4 34.4-24.9 63.6-53.1 83v68.9h85.7c50.2-46.3 79-114.5 79-200.9z"/><path fill="#34a853" d="M272 544.3c72.6 0 133.6-24 178.2-65.4l-85.7-68.9c-23.8 16-54.4 25.4-92.5 25.4-71 0-131.1-47.9-152.6-112.4H35.6v70.6C80.6 487 168.5 544.3 272 544.3z"/><path fill="#fbbc04" d="M119.4 324.9c-10.6-31.8-10.6-66 0-97.8V156.5H35.6c-39.6 77.3-39.6 169.3 0 246.6l83.8-78.2z"/><path fill="#ea4335" d="M272 107.7c38.5 0 73.1 13.3 100.3 39.3l75-75C405.4 24.3 344.4 0 272 0 168.5 0 80.6 57.3 35.6 139.1l83.8 70.6C140.9 155.6 201 107.7 272 107.7z"/></svg>
            </span>
            <span className="social-text">Sign in with Google</span>
          </button>
        </div>

        {errors.length > 0 && (
          <div className="signin-errors">
            <ul>
              {errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        <form className="signin-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            placeholder="Username or Email"
            value={form.identifier}
            onChange={(e) => setForm({ ...form, identifier: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          
          <a href="#" className="forgot-password">Forget Your Password?</a>
          
          <button type="submit" disabled={loading}>
            {loading ? 'Signing in…' : 'SIGN IN'}
          </button>
        </form>
      </div>

      <div className="signin-right">
        <h1 className="welcome-text">Hello, Friend!</h1>
        <p>Register with your personal details to use all of site features</p>
        <button className="signup-button" onClick={() => navigate('/signup')}>SIGN UP</button>
      </div>
    </div>
  );
}