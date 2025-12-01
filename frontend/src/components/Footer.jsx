import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Real Estate</h3>
            <p>Helping you find the perfect property with trust and transparency.</p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/#why-choose-us">Why Choose Us</a></li>
              <li><a href="/properties">Property Listings</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
