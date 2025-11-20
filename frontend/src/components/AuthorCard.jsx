const AuthorCard = ({ author }) => {
  return (
    <div className="author-card">
      <div className="author-card__avatar">
        {author.avatar ? (
          <img src={author.avatar} alt={author.name} />
        ) : (
          <div className="author-card__avatar-placeholder">
            {author.name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </div>
      
      <div className="author-card__content">
        <h4 className="author-card__name">{author.name}</h4>
        <p className="author-card__bio">{author.bio}</p>
        
        <a 
          href={`mailto:${author.email}`}
          className="author-card__contact"
          aria-label={`Contact ${author.name}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Get in touch
        </a>
      </div>
    </div>
  );
};

export default AuthorCard;