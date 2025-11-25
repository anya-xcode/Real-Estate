import React from 'react'
import Footer from '../components/Footer'
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-subtitle">
            Your trusted partner in finding the perfect property
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              We connect property seekers with their dream homes through a transparent, secure, and user-friendly platform. Making property discovery seamless for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-trust">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3>Verified Properties</h3>
              <p>Every listing is verified for authenticity</p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3>Transparent Pricing</h3>
              <p>Complete property details upfront</p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3>Secure Platform</h3>
              <p>Your data is protected with security</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}