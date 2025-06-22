import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/about1.jpeg";

import { FormattedMessage } from "react-intl";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-wrapper">
          <img
            className="about-image"
            src={aboutImg}
            width={550}
            height={320}
            alt="Picture with characters from anime and video games"
          />

          <div className="about-content">
            <h2 className="about-title">
              About <span>Me</span>
            </h2>
            <p className="about-text">
              Greetings! I'm <span>Selvamanan</span>, a dedicated{" "}
              <span>MERN Stack Developer</span> driven by my passion for
              building fully responsive, scalable, and user-focused web
              applications.My expertise spans the full stack, with a solid
              foundation in <span>MongoDB</span>, <span>Express.js</span>,{" "}
              <span>React.js</span>, and <span>Node.js</span>, allowing me to
              develop seamless, end-to-end solutions. Currently, I'm deeply
              engaged with <span>React</span>, <span>Next.js</span>, and{" "}
              <span>TypeScript</span>, constantly pushing the boundaries of what
              can be achieved in full-stack development. I take pride in writing
              clean, efficient code and crafting intuitive interfaces that
              enhance user experience.
            </p>
          </div>
        </div>

        <section className="contactos" id="contactos">
          <h2 className="heading">
            {/* <FormattedMessage id="contact" defaultMessage="Contact" /> */}
          </h2>
          <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
            <h4 id="contact-info">Contact me by:</h4>
            <Typewriter
              words={["Gmail", "WhatsApp", "Instagram", "Telegram"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>

          <div className="icons-Social">
            <a
              href="mailto:selvamanan369@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
            >
              <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fas fa-envelope"></span>
              </div>
              <div className="text">Gmail</div>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919585988369"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
            >
              <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fab fa-whatsapp"></span>
              </div>
              <div className="text">Whatsapp</div>
            </a>
            <a
              href="https://www.instagram.com/nahuelcarrizolc/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
            >
              <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fab fa-instagram"></span>
              </div>
              <div className="text">Instagram</div>
            </a>
            <a
              href="https://t.me/selva_lr"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
            >
              <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fab fa-telegram"></span>
              </div>
              <div className="text">telegram</div>
            </a>

            <a
              href="https://www.linkedin.com/in/selvamanan/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
            >
              <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fab fa-linkedin-in"></span>
              </div>
              <div className="text">Linkedin</div>
            </a>
            <a
              href="https://github.com/selvalr"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
            >
              <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fab fa-github-square"></span>
              </div>
              <div className="text">GitHub</div>
            </a>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
