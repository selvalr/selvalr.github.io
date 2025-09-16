function ResumeSide() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "ReactJS", level: 85 },
    { name: "NodeJs", level: 80 },
    { name: "Express", level: 75 },
    { name: "MongoDB", level: 82 },
    { name: "MySQL", level: 78 },
    { name: "Bootstrap", level: 85 },
    { name: "Sass", level: 75 },
  ];

  return (
    <aside className="sidebared">
      <div className="contact-section">
        <h2 className="section-title">CONTACT</h2>
        <div className="contact-item">
          <span className="contact-icon">📱</span>
          <div className="contact-details">
            <p className="contact-label">Phone</p>
            <p className="contact-value">+91 9585598369</p>
          </div>
        </div>
        <div className="contact-item">
          <span className="contact-icon">✉️</span>
          <div className="contact-details">
            <p className="contact-label">Email</p>
            <p className="contact-value">selvamanan369@gmail.com</p>
          </div>
        </div>
        <div className="contact-item">
          <span className="contact-icon">🏠</span>
          <div className="contact-details">
            <p className="contact-label">Home</p>
            <p className="contact-value">Tenkasi</p>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h2 className="section-title">SKILLS</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="follow-section">
        <h2 className="section-title">FOLLOW ME</h2>
        <div className="social-links">
          <a href="#" className="social-link">
            <span className="social-icon">📱</span>
            <span className="social-text">Github</span>
          </a>
          <a href="#" className="social-link">
            <span className="social-icon">💼</span>
            <span className="social-text">LinkedIn</span>
          </a>
          <a href="#" className="social-link">
            <span className="social-icon">❌</span>
            <span className="social-text">X</span>
          </a>
        </div>
      </div>

      <div className="language-section">
        <h2 className="section-title">LANGUAGE</h2>
        <div className="language-item">
          <span className="language-name">Tamil - Native</span>
        </div>
        <div className="language-item">
          <span className="language-name">English - Professional</span>
        </div>
      </div>
    </aside>
  );
}

export default ResumeSide;
