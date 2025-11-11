import React, { useState, useMemo } from 'react'
import './EMICalculator.css'

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(5000000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [tenure, setTenure] = useState(20)

  const calculations = useMemo(() => {
    const principal = loanAmount
    const monthlyRate = interestRate / 12 / 100
    const months = tenure * 12

    // EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
    const emi = monthlyRate === 0 
      ? principal / months 
      : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
        (Math.pow(1 + monthlyRate, months) - 1)

    const totalAmount = emi * months
    const totalInterest = totalAmount - principal

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
      principal
    }
  }, [loanAmount, interestRate, tenure])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }

  const principalPercentage = ((calculations.principal / calculations.totalAmount) * 100).toFixed(1)
  const interestPercentage = ((calculations.totalInterest / calculations.totalAmount) * 100).toFixed(1)

  return (
    <div className="emi-calculator">
      <div className="calculator-container">
        {/* Input Section */}
        <div className="calculator-inputs">
          <div className="input-group">
            <label className="input-label">
              Loan Amount
              <span className="input-value">{formatCurrency(loanAmount)}</span>
            </label>
            <input
              type="range"
              min="100000"
              max="50000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="input-slider"
            />
            <div className="input-range-labels">
              <span>₹1L</span>
              <span>₹5Cr</span>
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">
              Interest Rate (% per annum)
              <span className="input-value">{interestRate}%</span>
            </label>
            <input
              type="range"
              min="5"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="input-slider"
            />
            <div className="input-range-labels">
              <span>5%</span>
              <span>20%</span>
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">
              Loan Tenure
              <span className="input-value">{tenure} Years</span>
            </label>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="input-slider"
            />
            <div className="input-range-labels">
              <span>1 Yr</span>
              <span>30 Yrs</span>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="calculator-results">
          <div className="results-summary">
            <div className="result-card result-card-primary">
              <div className="result-label">Monthly EMI</div>
              <div className="result-amount">{formatCurrency(calculations.emi)}</div>
            </div>

            <div className="result-card">
              <div className="result-label">Principal Amount</div>
              <div className="result-amount">{formatCurrency(calculations.principal)}</div>
            </div>

            <div className="result-card">
              <div className="result-label">Total Interest</div>
              <div className="result-amount">{formatCurrency(calculations.totalInterest)}</div>
            </div>

            <div className="result-card">
              <div className="result-label">Total Amount</div>
              <div className="result-amount">{formatCurrency(calculations.totalAmount)}</div>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="chart-container">
            <svg viewBox="0 0 200 200" className="pie-chart">
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="40"
                strokeDasharray={`${principalPercentage * 5.03} 503`}
                transform="rotate(-90 100 100)"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="40"
                strokeDasharray={`${interestPercentage * 5.03} 503`}
                strokeDashoffset={`-${principalPercentage * 5.03}`}
                transform="rotate(-90 100 100)"
              />
            </svg>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-color" style={{ background: '#3b82f6' }}></span>
                <span className="legend-text">Principal ({principalPercentage}%)</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ background: '#f59e0b' }}></span>
                <span className="legend-text">Interest ({interestPercentage}%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
