import React, { useEffect, useState, useRef } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

//import selva from "../assets/selva.png";

//import selva from "../assets/qw.png";

//import selva from "../assets/selvaLR.png";

import selva from "../assets/image.webp";

import { renderCanvas } from "../components/RenderCanvas";

import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Preload image
    const img = new Image();
    img.src = selva;

    // Wait at least 3 seconds before hiding loader
    const timer = setTimeout(() => {
      img.onload = () => {
        setLoading(false);
      };
      // if image already loaded quickly, still wait 3s
      if (img.complete) {
        setLoading(false);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      renderCanvas();
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="spinner"></div>
        <p className="text-spiner">Loading...</p>
        <span className="loader"></span>
      </div>
    );
  }

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
            style={{
              display: "flex",
              gap: "2rem",
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="socials-media"
          >
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={32} color="#1DA1F2" className="icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/selvamanan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaLinkedin size={32} color="#0077B5" className="icons" />
            </a>

            <a
              href="https://github.com/selvalr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icons" id="githubicons" />
            </a>
            <a
              href="https://wa.me/1234567890" // replace with your number
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp color="#25D366" className="icons" />
            </a>
          </div>
        </div>
        <div className="button">
          <Link to="/resume">
            <button className="btn">Download CV</button>
          </Link>
        </div>
      </div>
      <div className="profile">
        <img src={selva} alt="profile" id="profile-pic" loading="eager" />
        {/* <img src={selva} alt="" id="profile-pic" loading="eager" /> */}
      </div>

      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0"
        id="canvas"
      ></canvas>
    </section>
  );
};

export default Home;
