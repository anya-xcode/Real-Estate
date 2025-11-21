import { useState, useMemo } from 'react';
import { jobs } from '../data/jobs';
import JobCard from '../components/JobCard';
import TeamHighlight from '../components/TeamHighlight';
import ApplyModal from '../components/ApplyModal';
import './Careers.css';

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = !searchTerm || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = !selectedType || job.type === selectedType;
      
      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType]);

  const jobTypes = [...new Set(jobs.map(job => job.type))];

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="careers">
      <div className="careers__hero">
        <div className="careers__hero-content">
          <h1 className="careers__title">Join Our Mission</h1>
          <p className="careers__subtitle">
            Help us revolutionize how people find, buy, and sell homes. We're building the future of real estate technology with a team that values innovation, collaboration, and making a real impact on people's lives.
          </p>
          <a href="#open-roles" className="careers__cta">
            View Open Positions
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      <section className="careers__culture">
        <div className="careers__container">
          <h2 className="careers__section-title">Why Work With Us</h2>
          <div className="careers__culture-grid">
            <div className="careers__culture-item">
              <div className="careers__culture-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>People-First Culture</h3>
              <p>We prioritize work-life balance with flexible hours, remote options, and comprehensive health benefits. Your wellbeing matters to us.</p>
            </div>
            
            <div className="careers__culture-item">
              <div className="careers__culture-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Growth & Learning</h3>
              <p>$2,000+ annual learning budget, mentorship programs, conference attendance, and clear career advancement paths for every role.</p>
            </div>
            
            <div className="careers__culture-item">
              <div className="careers__culture-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3>Real Impact</h3>
              <p>Your work directly helps families find their perfect home. We've helped over 50,000 people in their real estate journey this year alone.</p>
            </div>
          </div>
        </div>
      </section>

      <TeamHighlight />

      <section id="open-roles" className="careers__jobs">
        <div className="careers__container">
          <h2 className="careers__section-title">Open Positions</h2>
          
          <div className="careers__filters">
            <div className="careers__search">
              <svg className="careers__search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search by title, department, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="careers__search-input"
              />
            </div>
            
            <div className="careers__type-filters">
              <button
                onClick={() => setSelectedType('')}
                className={`careers__type-filter ${selectedType === '' ? 'active' : ''}`}
              >
                All Types
              </button>
              {jobTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`careers__type-filter ${selectedType === type ? 'active' : ''}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="careers__results">
            <p className="careers__results-count">
              {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} available
            </p>
            
            <div className="careers__jobs-grid">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} onClick={handleJobClick} />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="careers__no-results">
                <h3>No positions found</h3>
                <p>Try adjusting your search or filter criteria, or check back later for new opportunities.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <ApplyModal 
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Careers;