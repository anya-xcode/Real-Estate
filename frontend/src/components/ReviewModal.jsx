import React, { useState } from 'react';
import './ReviewModal.css';

export default function ReviewModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    rating: 5,
    text: '',
    image: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.role.trim() || !formData.text.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    if (formData.text.length < 20) {
      setError('Review must be at least 20 characters long');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await onSubmit(formData);
      // Reset form
      setFormData({
        name: '',
        role: '',
        rating: 5,
        text: '',
        image: ''
      });
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to submit review');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="review-modal-overlay" onClick={onClose}>
      <div className="review-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="review-modal-header">
          <h2>Share Your Experience</h2>
          <button className="review-modal-close" onClick={onClose}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="review-modal-form">
          {error && (
            <div className="review-error-message">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          )}

          <div className="review-form-group">
            <label htmlFor="name">
              Your Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="review-form-group">
            <label htmlFor="role">
              Your Role <span className="required">*</span>
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="e.g., Home Buyer, Property Investor"
              required
            />
          </div>

          <div className="review-form-group">
            <label htmlFor="rating">
              Rating <span className="required">*</span>
            </label>
            <div className="rating-input">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`star-button ${star <= formData.rating ? 'active' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                >
                  <svg className="star-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
              <span className="rating-label">{formData.rating} star{formData.rating !== 1 ? 's' : ''}</span>
            </div>
          </div>

          <div className="review-form-group">
            <label htmlFor="text">
              Your Review <span className="required">*</span>
            </label>
            <textarea
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              placeholder="Share your experience with us (minimum 20 characters)"
              rows="5"
              required
            />
            <div className="character-count">
              {formData.text.length} / 500 characters
            </div>
          </div>

          <div className="review-form-group">
            <label htmlFor="image">
              Profile Image URL (Optional)
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/your-photo.jpg"
            />
            <small className="form-hint">Leave blank to use a default avatar</small>
          </div>

          <div className="review-modal-actions">
            <button
              type="button"
              className="review-btn review-btn-cancel"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="review-btn review-btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Submitting...
                </>
              ) : (
                'Submit Review'
              )}
            </button>
          </div>

          <p className="review-modal-note">
            Your review will be published after admin approval.
          </p>
        </form>
      </div>
    </div>
  );
}
