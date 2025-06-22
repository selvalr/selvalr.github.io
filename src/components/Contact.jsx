import React from "react";
import { ContactForm } from "../Contact-form/Contact-form";
import { Icon } from "../components/icon";
import { SocialLink } from "../components/socaial-lik";
import "../styles/Contact.css"; // Plain CSS

import "../styles/Project.css";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <section id="contacts" className="contacts">
        <div className="content">
          <h2 className="title">
            Contact <span>Me!</span>
          </h2>

          <div className="contact-wrapper">
            <div className="contact-inner">
              <h6 className="tagline">
                believe in <span className="karma">YourSelf</span>
              </h6>

              <div className="contact-info">
                <div className="info-block">
                  <div>
                    <Icon className="icon" name="mail" size={30} />
                  </div>
                  <div>
                    <h6 className="label">EMAIL</h6>
                    <a
                      href="mailto:selvamanan369@gmail.com"
                      className="info-text"
                    >
                      selvamanan369@gmail.com
                    </a>
                  </div>
                </div>

                <div className="info-block  endList">
                  <h6 className="label">WORKING HOURS</h6>
                  <p className="info-text">9:00 AM - 1:00 AM</p>
                </div>

                <div className="info-block">
                  <div>
                    <Icon className="icon" name="location" size={30} />
                  </div>
                  <div>
                    <h6 className="label">ADDRESS</h6>
                    <p className="info-text">Tenkasi, TamilNadu, India</p>
                  </div>
                </div>

                <div className="social-links">
                  <a
                    href="https://github.com/selvalr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialLink
                      className="social-icon"
                      href="https://github.com/selvalr"
                      iconName="github"
                      title="github"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/selvamanan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialLink
                      className="social-link"
                      href="https://www.linkedin.com/in/selvamanan/"
                      iconName="linkedIn"
                      title="linkedIn"
                    />
                  </a>
                  <a
                    href="https://x.com/selva_lr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialLink
                      className="social-link"
                      href="https://x.com/selva_lr"
                      iconName="skype"
                      title="skype"
                    />
                  </a>
                  <a
                    href="https://t.me/selva_lr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialLink
                      className="social-link"
                      href="https://t.me/selva_lr"
                      iconName="telegram"
                      title="telegram"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />

        <Footer />
      </section>
    </>
  );
};

export default Contact;
