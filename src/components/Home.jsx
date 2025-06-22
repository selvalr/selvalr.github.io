import React, { useEffect } from "react";
import "../styles/Home.css";
//import selva from "../assets/selva.png";

//import selva from "../assets/qw.png";

//import selva from "../assets/selva1.png";
import selva from "../assets/image.webp";

import { renderCanvas } from "../components/RenderCanvas";

import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="text">
          <h2 className="home__name mb-1">Hello, I'm Selvamanan 👋🏻</h2>
          <h1 className="home__title mb-2">
            <span className="home__title--span">Full-Stack</span>
            <span className="home__title--span">
              <span className="gradient-text">Web</span> Developer
            </span>
          </h1>

          <div
            style={{ display: "flex", gap: "2rem", cursor: "pointer" }}
            className="socials-media"
          >
            <FaTwitter size={32} color="#1DA1F2" className="icons" />
            <FaLinkedin size={32} color="#0077B5" className="icons" />
            <FaGithub className="icons" id="githubicons" />

            <FaWhatsapp color="#25D366" className="icons" />
          </div>
        </div>
        <div className="button">
          <button className="btn">Download CV</button>
          {/* <button class="button1">
            <div class="icon">
              <div class="arrow"></div>
              <svg class="line" viewBox="0 0 24 24"></svg>
            </div>
            &#68;ownload
          </button> */}
        </div>
      </div>
      <div className="profile">
        <img src={selva} alt="" id="profile-pic" loading="eager" />
      </div>

      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0"
        id="canvas"
      ></canvas>
    </section>
  );
};

export default Home;
