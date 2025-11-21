import './JobCard.css';

const JobCard = ({ job, onClick }) => {
  return (
    <div className="job-card" onClick={() => onClick(job)}>
      <div className="job-card__header">
        <h3 className="job-card__title">{job.title}</h3>
        <div className="job-card__meta">
          <span className="job-card__department">{job.department}</span>
          <span className="job-card__type">{job.type}</span>
        </div>
      </div>
      
      <div className="job-card__details">
        <div className="job-card__location">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {job.location}
        </div>
        <div className="job-card__seniority">{job.seniority} Level</div>
      </div>
      
      <p className="job-card__summary">{job.shortSummary}</p>
      
      <div className="job-card__footer">
        <button className="job-card__apply-btn">
          View Details
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default JobCard;