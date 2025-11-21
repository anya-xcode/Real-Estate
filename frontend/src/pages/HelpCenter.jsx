import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { helpCategories } from '../data/helpCategories';
import { faqs } from '../data/faqs';
import HelpCategoryCard from '../components/HelpCategoryCard';
import FaqItem from '../components/FaqItem';
import SupportForm from '../components/SupportForm';
import './HelpCenter.css';

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = !debouncedSearchTerm || 
        faq.question.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
      
      const matchesCategory = !selectedCategory || faq.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [debouncedSearchTerm, selectedCategory]);

  const filteredCategories = useMemo(() => {
    if (!debouncedSearchTerm) return helpCategories;
    
    return helpCategories.filter(category =>
      category.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.id);
    setSearchTerm('');
    document.getElementById('faqs-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  const quickLinks = [
    { title: 'About Us', path: '/about', icon: 'info' },
    { title: 'Careers', path: '/careers', icon: 'briefcase' },
    { title: 'Blog', path: '/blog', icon: 'book' },
    { title: 'Properties', path: '/properties', icon: 'home' }
  ];

  const getQuickLinkIcon = (iconName) => {
    const icons = {
      info: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4M12 8h.01"/>
        </svg>
      ),
      briefcase: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      book: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      ),
      home: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      )
    };
    return icons[iconName] || icons.info;
  };

  return (
    <div className="help-center">
      <div className="help-center__hero">
        <div className="help-center__hero-content">
          <h1 className="help-center__title">Help Center</h1>
          <p className="help-center__subtitle">
            Find answers quickly or reach our team for help
          </p>
          
          <div className="help-center__search">
            <div className="help-center__search-container">
              <svg className="help-center__search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for help articles, guides, or common questions..."
                className="help-center__search-input"
                aria-label="Search help articles"
              />
              {(searchTerm || selectedCategory) && (
                <button
                  onClick={clearSearch}
                  className="help-center__search-clear"
                  aria-label="Clear search"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="help-center__container">
        {!debouncedSearchTerm && !selectedCategory && (
          <section className="help-center__categories">
            <h2 className="help-center__section-title">Browse by Category</h2>
            <div className="help-center__categories-grid">
              {helpCategories.map(category => (
                <HelpCategoryCard 
                  key={category.id} 
                  category={category} 
                  onClick={handleCategoryClick}
                />
              ))}
            </div>
          </section>
        )}

        {(debouncedSearchTerm || selectedCategory) && (
          <section id="faqs-section" className="help-center__faqs">
            <div className="help-center__faqs-header">
              <h2 className="help-center__section-title">
                {selectedCategory 
                  ? `${helpCategories.find(c => c.id === selectedCategory)?.title} Help`
                  : `Search Results for "${debouncedSearchTerm}"`
                }
              </h2>
              <p className="help-center__results-count">
                {filteredFaqs.length} article{filteredFaqs.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {filteredFaqs.length > 0 ? (
              <div className="help-center__faqs-list">
                {filteredFaqs.map(faq => (
                  <FaqItem 
                    key={faq.id} 
                    faq={faq} 
                    searchTerm={debouncedSearchTerm}
                  />
                ))}
              </div>
            ) : (
              <div className="help-center__no-results">
                <h3>No articles found</h3>
                <p>Try different keywords or browse our categories above. Still need help? Contact our support team below.</p>
              </div>
            )}
          </section>
        )}

        <section className="help-center__support">
          <div className="help-center__support-grid">
            <SupportForm />
            
            <div className="help-center__quick-links">
              <h3>Quick Links</h3>
              <div className="help-center__links-grid">
                {quickLinks.map(link => (
                  <Link key={link.path} to={link.path} className="help-center__quick-link">
                    <div className="help-center__quick-link-icon">
                      {getQuickLinkIcon(link.icon)}
                    </div>
                    <span>{link.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpCenter;