import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { posts } from '../data/posts'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = posts.find(p => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <div className="post-not-found">
            <h1>Article Not Found</h1>
            <p>Sorry, we couldn't find the article you're looking for.</p>
            <Link to="/blog" className="back-to-blog">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const relatedPosts = posts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3)

  return (
    <div className="blog-post-page">
      <article className="blog-post">
        <div className="post-header">
          <div className="container-narrow">
            <Link to="/blog" className="back-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            <div className="post-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="post-tag">{tag}</span>
              ))}
            </div>

            <h1 className="post-title">{post.title}</h1>
            
            <div className="post-meta">
              <div className="post-author-info">
                <div className="author-avatar">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="author-name">{post.author.name}</div>
                  <div className="post-date">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                    <span className="separator">•</span>
                    {post.readTime}
                  </div>
                </div>
              </div>
            </div>

            {post.heroImage && (
              <div className="post-hero-image">
                <img src={post.heroImage} alt={post.title} />
              </div>
            )}
          </div>
        </div>

        <div className="post-content">
          <div className="container-narrow">
            <div 
              className="post-body"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="post-footer">
              <div className="author-card">
                <div className="author-card-avatar">
                  {post.author.name.charAt(0)}
                </div>
                <div className="author-card-info">
                  <h3>{post.author.name}</h3>
                  <p>{post.author.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="related-posts">
            <div className="container-narrow">
              <h2 className="related-posts-title">Related Articles</h2>
              <div className="related-posts-grid">
                {relatedPosts.map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="related-post-card"
                  >
                    {relatedPost.heroImage && (
                      <div className="related-post-image">
                        <img src={relatedPost.heroImage} alt={relatedPost.title} />
                      </div>
                    )}
                    <div className="related-post-content">
                      <h3>{relatedPost.title}</h3>
                      <p>{relatedPost.excerpt}</p>
                      <div className="related-post-meta">
                        {relatedPost.readTime}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
