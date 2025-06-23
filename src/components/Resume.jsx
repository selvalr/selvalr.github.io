import React from "react";
import "../styles/Resume.css";
import profiles from "../assets/profile.jpeg";

import pdf from "../assets/SELVAMANAN_RESUME.pdf";

export const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleManualDownload = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Selvamanan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div id="resumeBody">
        <div className="print-area1">
          <div className="header1">
            <img src={profiles} alt="profile" />
            <div className="header-text1">
              <h1>SELVAMANAN R</h1>
              <p>Web Developer</p>
            </div>
          </div>

          <div className="content1">
            <div className="left-area1">
              <div className="contact1">
                <h1>Contact</h1>
                <h5>
                  <i className="fa-solid fa-mobile-screen"></i> phone
                </h5>
                <p>+91 9585988369</p>
                <h5>
                  <i className="fa-regular fa-envelope"></i> Email
                </h5>
                <p>selvamanan369@gmail.com</p>
                <h5>
                  <i className="fa-solid fa-location-dot"></i> Home
                </h5>
                <p>Tenkasi</p>
              </div>

              <div className="skills1">
                <h1>Skills</h1>
                <div className="bars1">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "ReactJS",
                    "NodeJs",
                    "Express",
                    "MongoDB",
                    "MySQL",
                    "Bootsrtap",
                    "Saas",
                  ].map((skill) => (
                    <div className="bar1" key={skill}>
                      <p>{skill}</p>
                      <span></span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="follow1">
                <h1>Follow me</h1>
                <h4>
                  <i className="fa-brands fa-github"></i> Github
                </h4>
                <p>
                  <a
                    href="https://github.com/selvalr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    selvalr
                  </a>
                </p>
                <h4>
                  <i className="fa-brands fa-linkedin"></i> LinkedIn
                </h4>
                <p>
                  <a
                    href="https://www.linkedin.com/in/selvamanan-r"
                    target="_blank"
                    rel="noreferrer"
                  >
                    selvamanan-r
                  </a>
                </p>
                <h4>
                  <i className="fa-brands fa-square-x-twitter"></i> X
                </h4>
                <p>
                  <a
                    href="https://twitter.com/selva_lr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    selva_lr
                  </a>
                </p>
              </div>

              <div className="follow1">
                <h1>Language</h1>
                <h4>
                  Tamil <span>- Native</span>
                </h4>
                <h4>
                  English <span>- Professional</span>
                </h4>
              </div>
            </div>

            <div className="right-area1">
              <div className="about1">
                <h1>
                  <span>
                    <i className="far fa-user"></i>
                  </span>{" "}
                  About
                </h1>
                <p>
                  I’m Selvamanan, a BCA graduate and passionate MERN Stack
                  Developer skilled in MongoDB, Express.js, React.js, and
                  Node.js. Experienced in building responsive web apps, working
                  with REST APIs, and implementing secure authentication using
                  JWT.
                </p>
              </div>

              <div className="work1">
                <h1>
                  <span>
                    <i className="fas fa-suitcase-rolling"></i>
                  </span>{" "}
                  Work Experience
                </h1>
                <div className="work-group1">
                  <h3>Software Developer</h3>
                  <h4>Sri Super Vintech</h4>
                  <span>2023 - Present</span>
                  <p>
                    * Created a sophisticated billing application with ASP.NET
                    Web Forms and SQL Server; incorporated features for
                    customizable invoicing templates, allowing the ﬁnance team
                    to generate reports 50% faster and improve client
                    satisfaction.
                  </p>
                  <p>
                    * Automated invoice generation and integrated payment
                    tracking mechanisms, reducing manual errors by 40%.
                  </p>
                  <p>
                    * Optimized relational database schemas for customer
                    management and transaction records.
                  </p>
                </div>
                <div className="work-group1">
                  <h3>
                    MERN Stack Developer (Online Learning & Freelance Projects)
                  </h3>
                  <h4>Online</h4>
                  <span>2021 - Present</span>
                  <p>
                    * Built and deployed full-stack web applications using
                    MongoDB, Express.js, React.js, and Node.js.
                  </p>
                  <p>
                    * Created responsive user interfaces with React and
                    integrated RESTful APIs for dynamic data handling.
                  </p>
                  <p>
                    * Developed backend logic with Express.js and managed data
                    using MongoDB with Mongoose.
                  </p>
                  <p>
                    * Practiced agile methodologies and continuously improved
                    skills through online courses and documentation.
                  </p>
                </div>
              </div>

              <div className="work1">
                <h1>
                  <span>
                    <i className="fa-solid fa-list-check fa-sm"></i>
                  </span>{" "}
                  Projects
                </h1>
                <div className="work-group1">
                  <h3>1. Portfolio Website</h3>
                  <h4>
                    <a
                      href="https://github.com/selvalr/selvalr.github.io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source code GitHub
                    </a>
                  </h4>
                  <span></span>
                  <p>
                    * Developed a personal portfolio website using React.js to
                    showcase projects, skills, and contact details.
                  </p>
                  <p>
                    * Integrated downloadable resume, social links, and
                    interactive components for a professional presentation.
                  </p>
                  <p>
                    * Maintained source code on GitHub for version control and
                    project management.
                  </p>
                </div>
              </div>

              <div className="education1">
                <h1>
                  <span>
                    <i className="fa-solid fa-laptop-file"></i>
                  </span>{" "}
                  Education
                </h1>
                <div className="edu-group1">
                  <h4>VHNSN College, Virudhunagar</h4>
                  <span>2017 - 2020</span>
                  <p>Bachelor of Computer Applications - BCA</p>
                </div>
                <div className="edu-group1">
                  <h4>Higher Secondary</h4>
                  <span>2015 - 2017</span>
                  <p>Computer Science</p>
                </div>
                <div className="edu-group1">
                  <h4>Secondary</h4>
                  <span>2015</span>
                  <p>BCA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button id="btn" className="button1" onClick={handlePrint}>
          Print CV
        </button>
        <button className="button1" onClick={handleManualDownload}>
          Download CV
        </button>
      </div>
    </>
  );
};
