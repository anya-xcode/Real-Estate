import { Link } from 'react-router-dom';
import './PostCard.css';

const PostCard = ({ post, featured = false }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className={`post-card ${featured ? 'post-card--featured' : ''}`}>
      {post.heroImage && (
        <div className="post-card__image">
          <img src={post.heroImage} alt={post.title} />
        </div>
      )}
      
      <div className="post-card__content">
        <div className="post-card__meta">
          <time className="post-card__date">{formatDate(post.publishedAt)}</time>
          <span className="post-card__read-time">{post.readTime}</span>
        </div>
        
        <h3 className="post-card__title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        
        <p className="post-card__excerpt">{post.excerpt}</p>
        
        <div className="post-card__tags">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="post-card__tag">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="post-card__footer">
          <div className="post-card__author">
            <span className="post-card__author-name">{post.author.name}</span>
          </div>
          
          <Link to={`/blog/${post.slug}`} className="post-card__read-more">
            Read Article
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;