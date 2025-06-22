import React from "react";
import "../styles/Footer.css";
import selva1 from "../assets/hd1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__intro">
          <div>
            {/* <img src={selva1} alt="" className="contact-selva" /> */}
            <h1 class="footer__usman">Selvamanan R</h1>
            <h1 class="footer__role">A Full-Stack Developer</h1>
          </div>
        </div>
        <div className="footer__social">
          <h2 className="footer__heading">
            YOU CAN FIND ME AT HERE <span>✌</span>
          </h2>
          <div className="footer__icons">
            <a
              href="https://github.com/selvalr"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/selvamanan/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://t.me/selva_lr" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a
              href="https://wa.me/919585988369"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://x.com/selva_lr" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <i className="fab fa-codepen"></i>
            </a>
            {/* https://codepen.io/mdusmanansari */}
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>©2025. All Rights Reserved.</p>
        <p>
          Design and Built <span className="footer__heart">❤️</span> by R
          Selvamanan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
