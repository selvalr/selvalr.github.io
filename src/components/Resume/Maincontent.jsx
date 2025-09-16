function MainContent() {
  return (
    <main className="main-content1">
      <section className="about-section1" id="about1">
        <h2 className="content-title1">
          <span className="title-icon1">👤</span>
          ABOUT
        </h2>
        <p className="about-text1">
          MERN Stack and Full Stack Developer with 2+ years of combined
          experience in building scalable web applications, freelance projects,
          and billing software development. Proficient in React.js, Node.js,
          Express.js, MongoDB, and SQL, with additional expertise in ASP.NET Web
          Forms. Skilled in designing secure APIs, developing responsive UIs,
          and optimizing system performance.
        </p>
      </section>

      <section className="experience-section1" id="experience1">
        <h2 className="content-title1">
          <span className="title-icon1">💼</span>
          WORK EXPERIENCE
        </h2>

        <div className="experience-item1">
          <div className="experience-header1">
            <h3 className="job-title1">Software Developer</h3>
            <span className="job-period1">2023 - Present</span>
          </div>
          <p className="company-name1">Sri Super Vintech</p>
          <ul className="job-responsibilities1">
            <li>
              Created a sophisticated billing application with ASP.NET Web Forms
              and SQL Server, incorporated features for customizable invoicing
              templates, allowing the finance team to generate reports 50%
              faster and improve client satisfaction.
            </li>
            <li>
              Automated invoice generation and integrated payment tracking
              mechanisms, reducing manual errors by 40%.
            </li>
            <li>
              Optimized relational database schemas for customer management and
              transaction records.
            </li>
          </ul>
        </div>

        <div className="experience-item1">
          <div className="experience-header1">
            <h3 className="job-title1">
              MERN Stack Developer (Online Learning & Freelance Projects)
            </h3>
            <span className="job-period1">2021 - Present</span>
          </div>
          <p className="company-name1">Self-employed</p>
          <ul className="job-responsibilities1">
            <li>
              Built and deployed full-stack web applications using MongoDB,
              Express.js, React.js, and Node.js.
            </li>
            <li>
              Created responsive user interfaces with React and integrated
              RESTful APIs for dynamic data handling.
            </li>
            <li>
              Developed backend logic with Express.js and managed data using
              MongoDB with Mongoose.
            </li>
            <li>
              Practiced agile methodologies and continuously improved skills
              through online courses and documentation.
            </li>
          </ul>
        </div>
      </section>

      <section className="projects-section1" id="projects1">
        <h2 className="content-title1">
          <span className="title-icon1">📋</span>
          PROJECTS
        </h2>

        <div className="project-item1">
          <h3 className="project-title1">1. Portfolio Website</h3>
          <a href="#" className="project-link1">
            Source code GitHub
          </a>
          <ul className="project-description1">
            <li>
              Developed a personal portfolio website using React.js to showcase
              projects, skills, and contact details.
            </li>
            <li>
              Integrated downloadable resume, social links, and interactive
              components for a professional presentation.
            </li>
            <li>
              Maintained source code on GitHub for version control and project
              management.
            </li>
          </ul>
        </div>
      </section>

      <section className="education-section1" id="certificates1">
        <h2 className="content-title1">
          <span className="title-icon1">🎓</span>
          EDUCATION
        </h2>

        <div className="education-item1">
          <div className="education-header1">
            <h3 className="degree1">VHNSN College, Virudhunagar</h3>
            <span className="education-period1">2017 - 2020</span>
          </div>
          <p className="education-details1">
            Bachelor of Computer Applications - BCA
          </p>
        </div>

        <div className="education-item1">
          <div className="education-header1">
            <h3 className="degree1">Higher Secondary</h3>
            <span className="education-period1">2015 - 2017</span>
          </div>
          <p className="education-details1">
            Computer Science, Punitha Arulappar Higher Secondary School in
            Pavoorchatram, Tenkasi
          </p>
        </div>

        <div className="education-item1">
          <div className="education-header1">
            <h3 className="degree1">SSLC Examination</h3>
            <span className="education-period1">2015</span>
          </div>
          <p className="education-details1">
            Punitha Arulappar Higher Secondary School in Pavoorchatram, Tenkasi
          </p>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
