import { useState } from 'react';

const CommentsPlaceholder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.comment.trim()) {
      newErrors.comment = 'Comment is required';
    } else if (formData.comment.trim().length < 10) {
      newErrors.comment = 'Comment must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Comment submitted:', formData);
      alert('Thank you for your comment! Your feedback has been submitted successfully.');
      
      setFormData({ name: '', email: '', comment: '' });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="comments-placeholder">
      <h3 className="comments-placeholder__title">Leave a Comment</h3>
      <p className="comments-placeholder__subtitle">
        Share your thoughts and experiences with our community
      </p>
      
      <form onSubmit={handleSubmit} className="comments-placeholder__form">
        <div className="comments-placeholder__row">
          <div className="comments-placeholder__field">
            <label htmlFor="name" className="comments-placeholder__label">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`comments-placeholder__input ${errors.name ? 'comments-placeholder__input--error' : ''}`}
              placeholder="Your full name"
            />
            {errors.name && (
              <span className="comments-placeholder__error">{errors.name}</span>
            )}
          </div>
          
          <div className="comments-placeholder__field">
            <label htmlFor="email" className="comments-placeholder__label">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`comments-placeholder__input ${errors.email ? 'comments-placeholder__input--error' : ''}`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <span className="comments-placeholder__error">{errors.email}</span>
            )}
          </div>
        </div>
        
        <div className="comments-placeholder__field">
          <label htmlFor="comment" className="comments-placeholder__label">
            Comment *
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows="5"
            className={`comments-placeholder__textarea ${errors.comment ? 'comments-placeholder__input--error' : ''}`}
            placeholder="Share your thoughts, questions, or experiences..."
          />
          {errors.comment && (
            <span className="comments-placeholder__error">{errors.comment}</span>
          )}
        </div>
        
        <button type="submit" className="comments-placeholder__submit">
          Post Comment
        </button>
      </form>
      

    </div>
  );
};

export default CommentsPlaceholder;