import { useState, useEffect } from 'react';
import './ApplyModal.css';

const ApplyModal = ({ job, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: '',
    resume: null
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

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
    
    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = 'Cover letter is required';
    } else if (formData.coverLetter.trim().length < 50) {
      newErrors.coverLetter = 'Cover letter must be at least 50 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const applicationData = {
        job: job.title,
        applicant: formData,
        timestamp: new Date().toISOString()
      };
      
      console.log('Application submitted:', applicationData);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', coverLetter: '', resume: null });
        setErrors({});
        onClose();
      }, 2000);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleMailto = () => {
    const subject = `Application: ${job.title} - ${formData.name || 'Candidate'}`;
    const body = `Dear Hiring Team,\n\nI am interested in applying for the ${job.title} position.\n\nBest regards,\n${formData.name || 'Candidate'}`;
    window.location.href = `mailto:${job.applyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (!isOpen || !job) return null;

  return (
    <div className="apply-modal-overlay" onClick={onClose}>
      <div className="apply-modal" onClick={(e) => e.stopPropagation()}>
        <div className="apply-modal__header">
          <h2 className="apply-modal__title">{job.title}</h2>
          <button className="apply-modal__close" onClick={onClose} aria-label="Close modal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="apply-modal__content">
          <div className="apply-modal__job-info">
            <div className="apply-modal__meta">
              <span className="apply-modal__department">{job.department}</span>
              <span className="apply-modal__location">{job.location}</span>
              <span className="apply-modal__type">{job.type}</span>
            </div>
            <p className="apply-modal__summary">{job.shortSummary}</p>
          </div>

          <div className="apply-modal__section">
            <h3>Responsibilities</h3>
            <ul>
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="apply-modal__section">
            <h3>Requirements</h3>
            <ul>
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="apply-modal__section">
            <h3>Perks & Benefits</h3>
            <ul>
              {job.perks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="apply-modal__apply-section">
            <h3>Apply for this Position</h3>
            
            {isSubmitted ? (
              <div className="apply-modal__success">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
                <h4>Application Submitted!</h4>
                <p>Thank you for your interest. We'll review your application and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="apply-modal__form">
                <div className="apply-modal__form-row">
                  <div className="apply-modal__form-field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="apply-modal__error">{errors.name}</span>}
                  </div>
                  
                  <div className="apply-modal__form-field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="apply-modal__error">{errors.email}</span>}
                  </div>
                </div>

                <div className="apply-modal__form-field">
                  <label htmlFor="coverLetter">Cover Letter *</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows="6"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                    className={errors.coverLetter ? 'error' : ''}
                  />
                  {errors.coverLetter && <span className="apply-modal__error">{errors.coverLetter}</span>}
                </div>

                <div className="apply-modal__form-field">
                  <label htmlFor="resume">Resume (Optional)</label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                  />
                </div>

                <div className="apply-modal__form-actions">
                  <button type="submit" className="apply-modal__submit-btn">
                    Submit Application
                  </button>
                  <button type="button" onClick={handleMailto} className="apply-modal__mailto-btn">
                    Apply via Email
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;