import React from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import './Insights.css'

export default function Insights() {
  return (
    <section className="insights-section">
      <div className="insights-inner container">
        <div className="insights-top">
          <div className="insights-heading">
            <h2 className="insights-title">Real Estate Insights</h2>
            <p className="insights-sub">Expert analysis, tips and market trends</p>
          </div>
          
          <Link to="/blog" className="insights-viewall">
            View All
            <span className="insights-arrow">↗</span>
          </Link>
        </div>

        <div className="insights-grid">
          {posts.filter(post => post.featured && post.heroImage).slice(0, 3).map((item, index) => (
            <Link key={item.id} to={`/blog/${item.slug}`} className="insight-card-link" style={{ animationDelay: `${index * 0.1}s` }}>
              <article className="insight-card">
                <div className="insight-image-wrapper">
                  {item.heroImage && <img src={item.heroImage} alt={item.title} className="insight-image" />}
                  <div className="insight-overlay"></div>
                  
                  {/* Category Badge */}
                  <div className="insight-category-badge">
                    <svg className="category-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {item.tags[0]}
                  </div>

                  <div className="insight-content">
                    <h3 className="insight-card-title">{item.title}</h3>
                    <div className="insight-card-meta">
                      <div className="insight-author">
                        <svg className="author-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>By {item.author.name}</span>
                      </div>
                      <div className="insight-date-time">
                        <svg className="date-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{item.publishedAt}</span>
                        <span className="dot-separator">•</span>
                        <svg className="clock-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="insight-read-more">
                    <span>Read Article</span>
                    <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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