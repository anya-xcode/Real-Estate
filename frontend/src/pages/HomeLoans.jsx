import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EMICalculator from '../components/EMICalculator'
import EligibilityChecker from '../components/EligibilityChecker'
import './HomeLoans.css'

export default function HomeLoans() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanAmount: '',
    purpose: 'home-purchase',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you shortly.')
  }

  const scrollToEligibility = () => {
    const eligibilitySection = document.querySelector('.loans-eligibility-section')
    if (eligibilitySection) {
      eligibilitySection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToCalculator = () => {
    const calculatorSection = document.querySelector('.loans-calculator-section')
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Handle Buy button click - Navigate to properties listing page
  const handleBuyClick = () => {
    navigate('/properties')
  }

  // Handle Mortgage button click - Scroll to eligibility checker
  const handleMortgageClick = () => {
    scrollToEligibility()
  }

  // Handle Sell button click - Navigate to upload property page
  const handleSellClick = () => {
    navigate('/upload')
  }

  return (
    <div className="home-loans-page">
      {/* Hero Section */}
      <section className="loans-hero">
        <div className="container">
          <h1 className="loans-hero-title"> Loans for dream Home</h1>
          <p className="loans-hero-subtitle">
            Getting home is a journey. Our loan officers are here to help you stay on budget and on schedule.
          </p>
          
          <div className="loans-hero-buttons">
            <button className="loans-btn loans-btn-primary" onClick={scrollToEligibility}>Check Eligibility</button>
            <button className="loans-btn loans-btn-secondary" onClick={scrollToCalculator}>Calculate EMI</button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="loans-why-section">
        <div className="container">
          <div className="loans-cards-grid">
            <div className="loans-card">
              <div className="loans-card-icon">
                <svg viewBox="0 0 100 100" className="icon-illustration">
                  <circle cx="50" cy="50" r="40" fill="#FEE2E2" />
                  <path d="M40 45 L45 50 L60 35" stroke="#EF4444" strokeWidth="3" fill="none" />
                </svg>
              </div>
              <h3 className="loans-card-title">Buy</h3>
              <p className="loans-card-text">
                Redfin agents are among the most experienced in the industry and can help you win in today's market.
              </p>
              <button className="loans-card-btn" onClick={handleBuyClick}>
                <svg className="btn-icon-inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Browse Properties
              </button>
            </div>

            <div className="loans-card">
              <div className="loans-card-icon">
                <svg viewBox="0 0 100 100" className="icon-illustration">
                  <circle cx="50" cy="50" r="40" fill="#DBEAFE" />
                  <rect x="30" y="35" width="40" height="30" rx="2" fill="#3B82F6" />
                </svg>
              </div>
              <h3 className="loans-card-title">Mortgage</h3>
              <p className="loans-card-text">
                Get competitive rates, fast pre-approvals, and seamless closings with our trusted lending.
              </p>
              <button className="loans-card-btn" onClick={handleMortgageClick}>
                <svg className="btn-icon-inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Get Prequalified
              </button>
            </div>

            <div className="loans-card">
              <div className="loans-card-icon">
                <svg viewBox="0 0 100 100" className="icon-illustration">
                  <circle cx="50" cy="50" r="40" fill="#FEF3C7" />
                  <rect x="35" y="30" width="30" height="40" rx="2" fill="#F59E0B" />
                </svg>
              </div>
              <h3 className="loans-card-title">Sell</h3>
              <p className="loans-card-text">
                We know how to price, market, and sell your home for top dollar. And we do it all for half.
              </p>
              <button className="loans-card-btn" onClick={handleSellClick}>
                <svg className="btn-icon-inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                List Your Property
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EMI Calculator Section */}
      <section className="loans-calculator-section">
        <div className="container">
          <div className="calculator-header">
            <h2 className="calculator-title">EMI Calculator</h2>
            <p className="calculator-subtitle">Calculate your monthly home loan EMI and plan your budget</p>
          </div>
          <EMICalculator />
        </div>
      </section>

      {/* Eligibility Checker Section */}
      <section className="loans-eligibility-section">
        <div className="container">
          <div className="calculator-header">
            <h2 className="calculator-title">Check Your Eligibility</h2>
            <p className="calculator-subtitle">Find out how much home loan you can get based on your income and age</p>
          </div>
          <EligibilityChecker />
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="loans-documents-section">
        <div className="container">
          <div className="documents-header">
            <h2 className="documents-title">Documents Required</h2>
            <p className="documents-subtitle">Keep these documents ready for a smooth loan application process</p>
          </div>

          <div className="documents-grid">
            <div className="document-card">
              <div className="document-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="document-title">Identity Proof</h3>
              <ul className="document-list">
                <li>Aadhaar Card</li>
                <li>PAN Card</li>
                <li>Passport</li>
                <li>Voter ID</li>
                <li>Driving License</li>
              </ul>
            </div>

            <div className="document-card">
              <div className="document-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="document-title">Address Proof</h3>
              <ul className="document-list">
                <li>Aadhaar Card</li>
                <li>Utility Bills</li>
                <li>Rental Agreement</li>
                <li>Passport</li>
                <li>Bank Statement</li>
              </ul>
            </div>

            <div className="document-card">
              <div className="document-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="document-title">Income Proof</h3>
              <ul className="document-list">
                <li>Salary Slips (3 months)</li>
                <li>Bank Statements (6 months)</li>
                <li>ITR Returns (2 years)</li>
                <li>Form 16</li>
                <li>Employment Certificate</li>
              </ul>
            </div>

            <div className="document-card">
              <div className="document-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="document-title">Property Documents</h3>
              <ul className="document-list">
                <li>Sale Agreement</li>
                <li>Property Title Deed</li>
                <li>Allotment Letter</li>
                <li>NOC from Builder</li>
                <li>Property Tax Receipts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Apply Form Section */}
      <section className="loans-apply-section">
        <div className="container">
          <div className="apply-header">
            <h2 className="apply-title">Apply for Home Loan</h2>
            <p className="apply-subtitle">Fill out the form below and our loan experts will contact you shortly</p>
          </div>

          <form className="apply-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Loan Amount Required *</label>
                <input
                  type="text"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="₹50,00,000"
                  required
                />
              </div>

              <div className="form-group form-group-full">
                <label className="form-label">Loan Purpose *</label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                >
                  <option value="home-purchase">Home Purchase</option>
                  <option value="home-construction">Home Construction</option>
                  <option value="plot-purchase">Plot Purchase</option>
                  <option value="home-renovation">Home Renovation</option>
                  <option value="balance-transfer">Balance Transfer</option>
                  <option value="top-up">Top-up Loan</option>
                </select>
              </div>

              <div className="form-group form-group-full">
                <label className="form-label">Additional Information</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Tell us more about your requirements..."
                  rows="4"
                ></textarea>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="form-submit-btn">
                Submit Application
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <p className="form-note">We'll get back to you within 24 hours</p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}