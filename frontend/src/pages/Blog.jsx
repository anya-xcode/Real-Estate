import React, { useState } from 'react'
import { posts, tags } from '../data/posts'
import PostCard from '../components/PostCard'
import './Blog.css'

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter(post => {
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag)
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTag && matchesSearch
  })

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <div className="container">
          <h1 className="blog-hero-title">Real Estate Insights</h1>
          <p className="blog-hero-subtitle">
            Expert tips, market trends, and guides to help you make informed real estate decisions
          </p>
        </div>
      </div>

      <div className="container">
        <div className="blog-controls">
          <div className="blog-search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="blog-search-input"
            />
          </div>

          <div className="blog-tags">
            <button
              className={`tag-filter ${selectedTag === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedTag('All')}
            >
              All
            </button>
            {tags.map(tag => (
              <button
                key={tag}
                className={`tag-filter ${selectedTag === tag ? 'active' : ''}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-results-count">
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
        </div>

        <div className="blog-grid">
          {filteredPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="blog-no-results">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <h3>No articles found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
