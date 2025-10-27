import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

export default function Signup() {
  const [form, setForm] = useState({ username: '', firstName: '', lastName: '', email: '', password: '' });
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    setErrors([]);
    setMessage(null);
    const errs = validate();
    if (errs.length) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data && data.errors) {
          // express-validator format
          setErrors(data.errors.map((e) => e.msg || JSON.stringify(e)));
        } else if (data && data.message) {
          setErrors([data.message]);
        } else {
          setErrors(['Signup failed.']);
        }
      } else {
        setMessage(data.message || 'Signup successful. You can now log in.');
        setForm({ username: '', firstName: '', lastName: '', email: '', password: '', avatar: '' });
      }
    } catch (err) {
      setErrors([err.message || 'Network error']);
    } finally {
      setLoading(false);
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