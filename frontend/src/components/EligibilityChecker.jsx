import React, { useState, useMemo } from 'react'
import './EligibilityChecker.css'

export default function EligibilityChecker() {
  const [monthlyIncome, setMonthlyIncome] = useState(100000)
  const [age, setAge] = useState(35)
  const [existingEMI, setExistingEMI] = useState(0)

  const eligibility = useMemo(() => {
    // FOIR (Fixed Obligation to Income Ratio) - typically 50-60%
    const foir = 0.55
    
    // Available income for EMI after existing obligations
    const availableIncome = monthlyIncome - existingEMI
    const maxEMI = availableIncome * foir
    
    // Loan tenure based on age (retirement age assumed at 60)
    const maxTenure = Math.min(30, 60 - age)
    
    // Average interest rate assumption
    const interestRate = 8.5
    const monthlyRate = interestRate / 12 / 100
    const months = maxTenure * 12
    
    // Calculate eligible loan amount
    // EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
    // P = EMI x [(1+R)^N-1] / [R x (1+R)^N]
    const eligibleLoan = monthlyRate === 0 
      ? maxEMI * months 
      : maxEMI * ((Math.pow(1 + monthlyRate, months) - 1) / 
        (monthlyRate * Math.pow(1 + monthlyRate, months)))
    
    return {
      maxEMI: Math.round(maxEMI),
      eligibleLoan: Math.round(eligibleLoan),
      maxTenure,
      isEligible: eligibleLoan > 100000 && maxTenure >= 5
    }
  }, [monthlyIncome, age, existingEMI])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className="eligibility-checker">
      <div className="eligibility-container">
        {/* Input Section */}
        <div className="eligibility-inputs">
          <div className="input-group">
            <label className="input-label">
              Monthly Income
              <span className="input-value">{formatCurrency(monthlyIncome)}</span>
            </label>
            <input
              type="range"
              min="10000"
              max="500000"
              step="5000"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="input-slider"
            />
            <div className="input-range-labels">
              <span>₹10K</span>
              <span>₹5L</span>
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">
              Your Age
              <span className="input-value">{age} Years</span>
            </label>
            <input
              type="range"
              min="21"
              max="58"
              step="1"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="input-slider"
            />
            <div className="input-range-labels">
              <span>21</span>
              <span>58</span>
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">
              Existing EMI (if any)
              <span className="input-value">{formatCurrency(existingEMI)}</span>
            </label>
            <input
              type="range"
              min="0"
              max="100000"
              step="1000"
              value={existingEMI}
              onChange={(e) => setExistingEMI(Number(e.target.value))}
              className="input-slider"
            />
            <div className="input-range-labels">
              <span>₹0</span>
              <span>₹1L</span>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="eligibility-results">
          {eligibility.isEligible ? (
            <>
              <div className="eligibility-status eligibility-approved">
                <svg className="status-icon" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#10b981" />
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="status-text">You're Eligible!</div>
              </div>

              <div className="eligibility-details">
                <div className="detail-card detail-primary">
                  <div className="detail-label">Maximum Eligible Loan</div>
                  <div className="detail-value">{formatCurrency(eligibility.eligibleLoan)}</div>
                </div>

                <div className="detail-card">
                  <div className="detail-label">Maximum EMI</div>
                  <div className="detail-value">{formatCurrency(eligibility.maxEMI)}</div>
                </div>

                <div className="detail-card">
                  <div className="detail-label">Maximum Tenure</div>
                  <div className="detail-value">{eligibility.maxTenure} Years</div>
                </div>
              </div>

              <div className="eligibility-note">
                *Based on 55% FOIR and 8.5% interest rate. Actual eligibility may vary based on credit score and bank policies.
              </div>
            </>
          ) : (
            <div className="eligibility-status eligibility-notapproved">
              <svg className="status-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#ef4444" />
                <path d="M15 9l-6 6M9 9l6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className="status-text">Not Eligible</div>
              <div className="status-message">
                Please adjust your income or reduce existing EMIs to improve eligibility.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
