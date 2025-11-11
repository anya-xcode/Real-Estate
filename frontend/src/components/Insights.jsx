import React from 'react'
import './Insights.css'

const insightsData = [
  {
    id: 1,
    title: "5 Tips for First-Time Home Buyers in Today's Market",
    author: 'By Jessica Park',
    date: 'March 15, 2025',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    title: "How to Evaluate a Modern Home's ROI",
    author: 'By Jessica Park',
    date: 'March 15, 2025',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1505691723518-36a0d3e8e3a9?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    title: "Design Trends That Boost Resale Value",
    author: 'By Jessica Park',
    date: 'March 15, 2025',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80'
  }
]

export default function Insights() {
  return (
    <section className="insights-section">
      <div className="container insights-container">
        <div className="insights-header">
          <div>
            <h3 className="insights-title">Real Estate Insights</h3>
          </div>
          <a className="insights-view-all" href="#">View All</a>
        </div>

        <div className="insights-grid">
          {insightsData.map((item) => (
            <article key={item.id} className="insight-card">
              <div className="insight-image-wrapper">
                <img src={item.img} alt={item.title} className="insight-image" />
                <div className="insight-gradient" />
                <div className="insight-content">
                  <h4 className="insight-title-card">{item.title}</h4>
                  <div className="insight-meta">
                    <span className="insight-author">{item.author}</span>
                    <span className="insight-date">{item.date} • {item.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
