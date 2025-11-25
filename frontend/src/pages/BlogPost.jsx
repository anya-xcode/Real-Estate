import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { blogPosts } from '../data/blog';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', email: '', comment: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === slug);
    setPost(foundPost);

    if (foundPost) {
      document.title = `${foundPost.title} | Real Estate Blog`;
      // Load comments from localStorage
      const savedComments = localStorage.getItem(`comments_${slug}`);
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
    }
  }, [slug]);

  const validateForm = () => {
    const newErrors = {};
    if (!newComment.name.trim()) newErrors.name = 'Name is required';
    if (!newComment.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(newComment.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!newComment.comment.trim()) newErrors.comment = 'Comment is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const comment = {
        id: Date.now(),
        ...newComment,
        date: new Date().toISOString()
      };
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      localStorage.setItem(`comments_${slug}`, JSON.stringify(updatedComments));
      setNewComment({ name: '', email: '', comment: '' });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (!post) {
    return (
      <div className="blog-post__not-found">
        <h1>Can't find this post</h1>
        <p>This post might have been deleted or moved.</p>
        <Link to="/blog" className="blog-post__back-link">
          ← Back to all posts
        </Link>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="blog-post">
      <div className="blog-post__header">
        <div className="blog-post__container">
          <Link to="/blog" className="blog-post__back">
            ← Back to Blog
          </Link>
          
          <div className="blog-post__meta">
            <time className="blog-post__date">{formatDate(post.publishedAt)}</time>
            <span className="blog-post__read-time">{post.readTime}</span>
          </div>
          
          <h1 className="blog-post__title">{post.title}</h1>
        </div>
      </div>

      <div className="blog-post__container">
        <div className="blog-post__content">
          <div 
            className="blog-post__body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="comments-section">
            <h3 className="comments-title">Comments ({comments.length})</h3>
            
            {comments.length > 0 && (
              <div className="comments-list">
                {comments.map((comment) => (
                  <div key={comment.id} className="comment-item">
                    <div className="comment-header">
                      <div className="comment-avatar">{comment.name.charAt(0).toUpperCase()}</div>
                      <div className="comment-info">
                        <strong className="comment-name">{comment.name}</strong>
                        <span className="comment-date">
                          {new Date(comment.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                    <p className="comment-text">{comment.comment}</p>
                  </div>
                ))}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="comment-form">
              <h4 className="comment-form-title">Leave a Comment</h4>
              
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newComment.name}
                    onChange={handleChange}
                    className={errors.name ? 'input-error' : ''}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                
                <div className="form-field">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={newComment.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>
              
              <div className="form-field">
                <label htmlFor="comment">Comment *</label>
                <textarea
                  id="comment"
                  name="comment"
                  rows="5"
                  value={newComment.comment}
                  onChange={handleChange}
                  className={errors.comment ? 'input-error' : ''}
                />
                {errors.comment && <span className="error-text">{errors.comment}</span>}
              </div>
              
              <button type="submit" className="submit-btn">Post Comment</button>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;