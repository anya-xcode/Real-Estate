import React from 'react'
import { Link } from 'react-router-dom'
import './Insights.css'

const insightsData = [
  {
    id: 1,
    slug: '5-tips-first-time-home-buyers',
    title: "5 Tips for First-Time Home Buyers in Today's Market",
    author: 'Jessica Park',
    date: 'March 15, 2025',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 2,
    slug: 'evaluate-modern-home-roi',
    title: "How to Evaluate a Modern Home's ROI",
    author: 'Jessica Park',
    date: 'March 15, 2025',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 3,
    slug: 'design-trends-boost-resale-value',
    title: "Design Trends That Boost Resale Value",
    author: 'Jessica Park',
    date: 'March 15, 2025',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80'
  }
]

export default function Insights() {
  return (
    <section className="insights-section">
      <div className="insights-inner container">
        <div className="insights-top">
          <div className="insights-heading">
            <h2 className="insights-title">Real Estate Insights</h2>
            <p className="insights-sub">Expert analysis, tips and market trends</p>
          </div>
        </div>

        <div className="insights-grid">
          {insightsData.map((item) => (
            <Link key={item.id} to={`/blog/${item.slug}`} className="insight-card-link">
              <article className="insight-card">
                <div className="insight-image-wrapper">
                  <img src={item.img} alt={item.title} className="insight-image" />
                  <div className="insight-bottom">
                    <div className="insight-price" />
                    <h3 className="insight-card-title">{item.title}</h3>
                    <div className="insight-card-meta">
                      <span className="insight-author">By {item.author}</span>
                      <span className="insight-date">{item.date} • {item.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
