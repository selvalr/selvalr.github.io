// import React, { useState, useRef, useEffect } from "react";
// import "../styles/Certificates.css";
// import Image_FrontendExpert from "../assets/certificate/js.jpg";
// import Image_AlgoExpert from "../assets/certificate/react.jpg";
// import Image_Leetcode from "../assets/certificate/adReact.jpg";
// import Image_Supervised_ML from "../assets/certificate/back.jpg";

// const images = [
//   Image_FrontendExpert,
//   Image_AlgoExpert,
//   Image_Leetcode,
//   Image_Supervised_ML,
// ];

// const delay = 4000;

// const Certificates = () => {
//   const [index, setIndex] = useState(0);
//   const timeoutRef = useRef(null);

//   const resetTimeout = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   };

//   useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(() => {
//       setIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, delay);

//     return () => resetTimeout();
//   }, [index]);

//   return (
//     <div className="slideshow" id="certificate">
//       <div
//         className="slideshowSlider"
//         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//       >
//         {images.map((image, idx) => (
//           <div className="slide" key={idx}>
//             <img
//               className="certificate"
//               src={image}
//               alt={`certificate-${idx}`}
//             />
//           </div>
//         ))}
//       </div>
//       <div className="slideshowDots">
//         {images.map((_, idx) => (
//           <div
//             key={idx}
//             className={`slideshowDot${index === idx ? " active" : ""}`}
//             onClick={() => setIndex(idx)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Certificates;

import React, { useState, useRef, useEffect } from "react";
import "../styles/Certificates.css";
import Image_FrontendExpert from "../assets/certificate/js.jpg";
import Image_AlgoExpert from "../assets/certificate/react.jpg";
import Image_Leetcode from "../assets/certificate/adReact.jpg";
import Image_Supervised_ML from "../assets/certificate/back.jpg";

import VersionImage from "../assets/certificate/version.jpg";
import Github from "../assets/certificate/github.jpg";
import frontEnd from "../assets/certificate/Front.jpg";
import node from "../assets/certificate/node.jpg";

// other imports...

const images = [
  Image_FrontendExpert,
  Image_AlgoExpert,
  Image_Leetcode,
  Image_Supervised_ML,
  VersionImage,
  Github,
  frontEnd,
  node,
];

const delay = 4000;

const Certificates = () => {
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => resetTimeout();
  }, [index]);

  const handleImageLoad = (idx) => {
    setLoadedImages((prev) => ({ ...prev, [idx]: true }));
  };

  return (
    <div className="certificate-container">
      <h1 style={{ textAlign: "center" }}>Certification</h1>
      <div className="slideshow" id="certificate">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((image, idx) => (
            <div className="slide" key={idx}>
              <img
                className={`certificate ${loadedImages[idx] ? "loaded" : ""}`}
                src={image}
                alt={`certificate-${idx}`}
                loading="lazy"
                onLoad={() => handleImageLoad(idx)}
              />
            </div>
          ))}
        </div>

        <div className="slideshowDots">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => setIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
