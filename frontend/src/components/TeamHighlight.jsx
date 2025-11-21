import './TeamHighlight.css';

const TeamHighlight = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Head of Engineering",
      quote: "We build technology that actually helps people find home.",
      avatar: ""
    },
    {
      name: "Marcus Johnson",
      role: "Product Designer",
      quote: "Every pixel matters when someone's searching for their future.",
      avatar: ""
    },
    {
      name: "Elena Rodriguez",
      role: "Customer Success Lead",
      quote: "Our customers' success stories fuel everything we do here.",
      avatar: ""
    }
  ];

  return (
    <div className="team-highlight">
      <h3 className="team-highlight__title">Meet Our Team</h3>
      <div className="team-highlight__grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="team-member__avatar">
              {member.avatar ? (
                <img src={member.avatar} alt={`${member.name}, ${member.role}`} />
              ) : (
                <div className="team-member__avatar-placeholder">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            <div className="team-member__info">
              <h4 className="team-member__name">{member.name}</h4>
              <p className="team-member__role">{member.role}</p>
              <blockquote className="team-member__quote">"{member.quote}"</blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamHighlight;