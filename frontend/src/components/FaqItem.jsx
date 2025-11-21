import { useState } from 'react';
import './FaqItem.css';

const FaqItem = ({ faq, searchTerm = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const highlightText = (text, term) => {
    if (!term) return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="faq-highlight">{part}</mark>
      ) : part
    );
  };

  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        className="faq-item__question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span className="faq-item__question-text">
          {highlightText(faq.question, searchTerm)}
        </span>
        <svg 
          className="faq-item__icon" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <polyline points="6,9 12,15 18,9"/>
        </svg>
      </button>
      
      <div 
        className="faq-item__answer-wrapper"
        id={`faq-answer-${faq.id}`}
        aria-hidden={!isOpen}
      >
        <div className="faq-item__answer">
          {highlightText(faq.answer, searchTerm)}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;