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

// import React, { useEffect, useRef, useState } from "react";
// import { projectsData } from "../assets/assets";
// import "../styles/CertiFications.css";

// function Project() {
//   const [cardsToShow, setCardsToShow] = useState(1);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [loaded, setLoaded] = useState({});
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const scrollContainerRef = useRef(null);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   // Update cards to show based on screen size
//   useEffect(() => {
//     const updateCardsToShow = () => {
//       const width = window.innerWidth;
//       if (width >= 1024) {
//         setCardsToShow(3);
//       } else if (width >= 768) {
//         setCardsToShow(2);
//       } else {
//         setCardsToShow(1);
//       }
//     };

//     updateCardsToShow();
//     window.addEventListener("resize", updateCardsToShow);
//     return () => window.removeEventListener("resize", updateCardsToShow);
//   }, []);

//   // Calculate total slides
//   const totalSlides = Math.ceil(projectsData.length / cardsToShow);

//   // Handle navigation
//   const goToSlide = (slideIndex) => {
//     if (isTransitioning) return;

//     const maxSlide = totalSlides - 1;
//     const newSlide = Math.max(0, Math.min(slideIndex, maxSlide));

//     setIsTransitioning(true);
//     setCurrentSlide(newSlide);
//     setActiveIndex(newSlide * cardsToShow);

//     setTimeout(() => setIsTransitioning(false), 300);
//   };

//   const nextSlide = () => {
//     goToSlide(currentSlide + 1);
//   };

//   const prevSlide = () => {
//     goToSlide(currentSlide - 1);
//   };

//   // Touch handlers for mobile swipe
//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchMove = (e) => {
//     e.preventDefault();
//   };

//   const handleTouchEnd = (e) => {
//     touchEndX.current = e.changedTouches[0].clientX;
//     handleSwipe();
//   };

//   const handleSwipe = () => {
//     const swipeThreshold = 50;
//     const diff = touchStartX.current - touchEndX.current;

//     if (Math.abs(diff) > swipeThreshold) {
//       if (diff > 0 && currentSlide < totalSlides - 1) {
//         nextSlide();
//       } else if (diff < 0 && currentSlide > 0) {
//         prevSlide();
//       }
//     }
//   };

//   // Handle image load
//   const handleImageLoad = (index) => {
//     setLoaded((prev) => ({ ...prev, [index]: true }));
//   };

//   // Auto-play functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentSlide >= totalSlides - 1) {
//         goToSlide(0);
//       } else {
//         nextSlide();
//       }
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentSlide, totalSlides]);

//   return (
//     <div id="Certification" className="container-custom">
//       <div className="header-section">
//         <h1 className="text-custom">
//           Certification <span className="text-underline-custom">Achieved</span>
//         </h1>
//         <p className="text-box-custom">
//           Please go through the Certification given below.
//         </p>
//       </div>

//       <div className="carousel-wrapper">
//         {/* Navigation Arrows */}
//         <button
//           className={`arrow left-arrow ${currentSlide === 0 ? "disabled" : ""}`}
//           onClick={prevSlide}
//           disabled={currentSlide === 0 || isTransitioning}
//           aria-label="Previous slide"
//         >
//           &#10094;
//         </button>

//         <button
//           className={`arrow right-arrow ${
//             currentSlide >= totalSlides - 1 ? "disabled" : ""
//           }`}
//           onClick={nextSlide}
//           disabled={currentSlide >= totalSlides - 1 || isTransitioning}
//           aria-label="Next slide"
//         >
//           &#10095;
//         </button>

//         {/* Cards Container */}
//         <div
//           className="carousel-container"
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div
//             className="cards-track"
//             style={{
//               transform: `translateX(-${currentSlide * 100}%)`,
//               transition: isTransitioning
//                 ? "transform 0.3s ease-in-out"
//                 : "none",
//             }}
//           >
//             {Array.from({ length: totalSlides }, (_, slideIndex) => (
//               <div key={slideIndex} className="slide">
//                 {projectsData
//                   .slice(
//                     slideIndex * cardsToShow,
//                     (slideIndex + 1) * cardsToShow
//                   )
//                   .map((project, cardIndex) => {
//                     const globalIndex = slideIndex * cardsToShow + cardIndex;
//                     return (
//                       <div
//                         key={globalIndex}
//                         className="card-custom"
//                         style={{ width: `${100 / cardsToShow}%` }}
//                       >
//                         <div className="card-content">
//                           <div className="flex-col-gap">
//                             <h2 className="text-customw">{project.title}</h2>
//                             <div className="image-container">
//                               <img
//                                 className={`img-custom ${
//                                   loaded[globalIndex] ? "loaded" : ""
//                                 }`}
//                                 src={project.image}
//                                 alt={project.title}
//                                 onLoad={() => handleImageLoad(globalIndex)}
//                                 loading="lazy"
//                               />
//                             </div>
//                           </div>
//                           <div className="flex-row-center">
//                             <p className="certificate-text">
//                               Certificate Link:
//                             </p>
//                             <a
//                               href={project.src}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="certificate-link"
//                               aria-label={`View ${project.title} certificate`}
//                             >
//                               <img
//                                 src={project.links_img}
//                                 alt="External link"
//                                 className="link-icon"
//                               />
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Pagination Dots */}
//         <div className="dot-container">
//           {Array.from({ length: totalSlides }, (_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`dot ${currentSlide === index ? "active" : ""}`}
//               aria-label={`Go to slide ${index + 1}`}
//               disabled={isTransitioning}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Project;
