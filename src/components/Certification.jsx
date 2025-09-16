import React, { useEffect, useRef, useState } from "react";
import { projectsData } from "../assets/assets";
import { motion } from "framer-motion";

import "../styles/CertiFications.css";
function Project() {
  const [cardsToShow, setCardsToShow] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(Math.min(projectsData.length, 3));
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const scrollPosition = container.scrollLeft;
        const cardWidth = container.offsetWidth / cardsToShow;
        const newIndex = Math.round(scrollPosition / cardWidth);
        setActiveIndex(newIndex);
      }
    };

    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => container?.removeEventListener("scroll", handleScroll);
  }, [cardsToShow]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.offsetWidth / cardsToShow;
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      id="Certification"
      className="container-custom"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-custom">
        Certification <span className="text-underline-custom">Achieved</span>
      </h1>
      <p className="text-box-custom">
        Please go through the Certification given below.
      </p>
      <div className="carousel-wrapper">
        {/* Left Arrow */}
        <button
          className="arrow left-arrow"
          onClick={() => handleDotClick(Math.max(activeIndex - 1, 0))}
          disabled={activeIndex === 0}
        >
          &#10094;
        </button>
        <div
          ref={scrollContainerRef}
          className="scrollbar-custom"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="card-custom"
              style={{
                flex: `0 0 ${100 / cardsToShow}%`,
                scrollSnapAlign: "start",
              }}
            >
              <div className="flex-col-gap">
                <h2 className="text-customw">{project.title}</h2>
                <img
                  className={`img-custom ${loaded ? "loaded" : ""}`}
                  src={project.image}
                  alt={project.title}
                  onLoad={() => setLoaded(true)}
                />
              </div>
              <div className="flex-row-center">
                <p className="text-gray-300">Certificate Link:</p>
                <a href={project.src} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.links_img}
                    alt="Project Link"
                    className="link-icon"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          className="arrow right-arrow"
          onClick={() =>
            handleDotClick(Math.min(activeIndex + 1, projectsData.length - 1))
          }
          disabled={activeIndex === projectsData.length - 1}
        >
          &#10095;
        </button>
      </div>

      {/* Dot navigation */}
      <div className="dot-container">
        {projectsData.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`dot ${activeIndex === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </motion.div>
  );
}

export default Project;
