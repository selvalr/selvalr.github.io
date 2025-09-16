function Sidebar() {
  const skills = [
    // Frontend
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript (ES6+)", level: 88 },
    { name: "ReactJS", level: 85 },
    { name: "React Native (Beginner)", level: 60 },
    { name: "Bootstrap", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Sass/SCSS", level: 75 },

    // Backend
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 75 },

    // Database
    { name: "MongoDB", level: 82 },
    { name: "MySQL", level: 78 },
    { name: "SQL Server", level: 75 },

    // Tools & Workflow
    { name: "Git", level: 85 },
    { name: "GitHub", level: 85 },
    { name: "Docker", level: 65 },

    // Legacy & Reporting
    { name: "ASP.NET Web Forms (C#)", level: 70 },
  ];

  return (
    <aside className="sidebar1">
      <div className="contact-section1">
        <h2 className="section-title1">CONTACT</h2>
        <div className="contact-item1">
          <span className="contact-icon1">📱</span>
          <div className="contact-details1">
            <p className="contact-label1">Phone</p>
            <p className="contact-value1">+91 9585598369</p>
          </div>
        </div>
        <div className="contact-item1">
          <span className="contact-icon1">✉️</span>
          <div className="contact-details1">
            <p className="contact-label1">Email</p>
            <p className="contact-value1">selvamanan369@gmail.com</p>
          </div>
        </div>
        <div className="contact-item1">
          <span className="contact-icon1">🏠</span>
          <div className="contact-details1">
            <p className="contact-label1">Home</p>
            <p className="contact-value1">Tenkasi</p>
          </div>
        </div>
      </div>

      <div className="skills-section1">
        <h2 className="section-title1">SKILLS</h2>
        <div className="skills-list1">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item1">
              <div className="skill-header1">
                <span className="skill-name1">{skill.name}</span>
              </div>
              <div className="skill-bar1">
                <div
                  className="skill-progress1"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="follow-section1">
        <h2 className="section-title1">FOLLOW ME</h2>
        <div className="social-links1">
          <a href="https://github.com/selvalr" className="social-link1">
            <span className="social-icon1">🌐</span>
            <span className="social-text1">Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/selvamanan/"
            className="social-link1"
          >
            <span className="social-icon1">💼</span>
            <span className="social-text1">LinkedIn</span>
          </a>
          <a href="https://x.com/selva_lr" className="social-link1">
            <span className="social-icon1">𝕏</span>
            <span className="social-text1">X</span>
          </a>
          {/* <a href="#" className="social-link1">
            <span className="social-icon1">📧</span>
            <span className="social-text1">selvamanan369@gmail.com</span>
          </a> */}
        </div>
      </div>

      <div className="certification-section1">
        <h2 className="section-title1">CERTIFICATIONS</h2>
        <div className="certification-links1">
          <div className="certification-item1">
            <span className="certification-icon1">📘</span>
            <span className="certification-text1">JavaScript – Meta</span>
          </div>
          <div className="certification-item1">
            <span className="certification-icon1">⚛️</span>
            <span className="certification-text1">React Basics – Meta</span>
          </div>
          <div className="certification-item1">
            <span className="certification-icon1">🚀</span>
            <span className="certification-text1">Advanced React – Meta</span>
          </div>
          <div className="certification-item1">
            <span className="certification-icon1">🖥️</span>
            <span className="certification-text1">Back-End – Meta</span>
          </div>
        </div>
      </div>

      <div className="language-section1">
        <h2 className="section-title1">LANGUAGE</h2>
        <div className="language-item1">
          <span className="language-name1">Tamil - Native</span>
        </div>
        <div className="language-item1">
          <span className="language-name1">English - Professional</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
