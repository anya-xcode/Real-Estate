import React from 'react'
import '../pages/Home.css'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Real Estate</h3>
            <p>Helping you find the perfect property with trust and transparency.</p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <div className="link-group">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/#why-choose-us">Why Choose Us</a></li>
                <li><a href="/properties">Property Listings</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
