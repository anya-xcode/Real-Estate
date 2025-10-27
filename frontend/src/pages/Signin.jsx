import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css';

export default function Signin() {
  // accept username OR email as identifier
  const [form, setForm] = useState({ identifier: '', password: '' });
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      const res = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: form.identifier, password: form.password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors([data.message || 'Sign in failed']);
      } else {
        // Handle successful sign in
        console.log('Signed in successfully', data);
      }
    } catch (err) {
      setErrors(['Network error']);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="signin-root">
      <div className="signin-left">
        <h2>Sign In</h2>
        
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