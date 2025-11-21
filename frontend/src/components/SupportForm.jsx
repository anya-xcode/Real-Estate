import { useState } from 'react';
import './SupportForm.css';

const SupportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issueType: '',
    message: '',
    file: null
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const issueTypes = [
    'Account Issues',
    'Payment Problems',
    'Property Listing Help',
    'Technical Support',
    'General Question',
    'Other'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please tell us your name';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'We need your email to respond';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.issueType) {
      newErrors.issueType = 'Help us route your message correctly';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please describe how we can help';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a bit more detail';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const supportTicket = {
        ...formData,
        timestamp: new Date().toISOString(),
        ticketId: `HELP-${Date.now()}`
      };
      
      console.log('Support ticket submitted:', supportTicket);
      console.log('Analytics event: support_form_submitted', {
        issue_type: formData.issueType,
        has_attachment: !!formData.file
      });
      
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', issueType: '', message: '', file: null });
        setErrors({});
      }, 3000);
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

  const handleUrgentHelp = () => {
    const subject = 'Urgent Help Needed';
    const body = `Hi there,\n\nI need urgent assistance with: ${formData.issueType || 'my account'}\n\nDetails: ${formData.message || 'Please call me as soon as possible.'}\n\nBest regards,\n${formData.name || 'Customer'}`;
    window.location.href = `mailto:support@realestate.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (isSubmitted) {
    return (
      <div className="support-form__success">
        <div className="support-form__success-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22,4 12,14.01 9,11.01"/>
          </svg>
        </div>
        <h3>Message sent successfully!</h3>
        <p>Thanks for reaching out. We typically respond within 2-4 hours during business hours. You'll hear from us soon at {formData.email}.</p>
      </div>
    );
  }

  return (
    <div className="support-form">
      <div className="support-form__header">
        <h3>Send us a message</h3>
        <p>Our friendly support team is here to help with any questions or issues.</p>
      </div>

      <form onSubmit={handleSubmit} className="support-form__form">
        <div className="support-form__row">
          <div className="support-form__field">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="How should we address you?"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="support-form__error">{errors.name}</span>}
          </div>
          
          <div className="support-form__field">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="support-form__error">{errors.email}</span>}
          </div>
        </div>

        <div className="support-form__field">
          <label htmlFor="issueType">What can we help with?</label>
          <select
            id="issueType"
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
            className={errors.issueType ? 'error' : ''}
          >
            <option value="">Choose the best category</option>
            {issueTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.issueType && <span className="support-form__error">{errors.issueType}</span>}
        </div>

        <div className="support-form__field">
          <label htmlFor="message">Tell us more</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your question or issue in detail. The more context you provide, the better we can help!"
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <span className="support-form__error">{errors.message}</span>}
        </div>

        <div className="support-form__field">
          <label htmlFor="file">Attach a file (optional)</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleChange}
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
          />
          <small>Screenshots or documents that might help us understand your issue</small>
        </div>

        <div className="support-form__actions">
          <button type="submit" className="support-form__submit">
            Send Message
          </button>
          <button type="button" onClick={handleUrgentHelp} className="support-form__urgent">
            Need urgent help?
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupportForm;