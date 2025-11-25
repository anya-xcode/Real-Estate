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
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Support</h4>
              <ul>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="contact-group">
              <h4>Contact</h4>
              <p>Email: <a href="mailto:support@realestate.com">support@realestate.com</a></p>
              <p>Phone: <a href="tel:+919876543210">+91 98765 43210</a></p>
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
