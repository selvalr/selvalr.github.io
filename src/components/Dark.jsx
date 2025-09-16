import React, { useState, useEffect, useRef } from "react";
import "../styles/Dark.css"; // Your CSS goes here

import toggleSound from "../assets/audio/light-switch.mp3";

const Dark = ({ isDay, setIsDay }) => {
  // Create Audio object only once using useRef
  const clickSound = useRef(null);

  useEffect(() => {
    clickSound.current = new Audio(toggleSound); // put file in public/sounds
  }, []);

  const handleToggle = () => {
    setIsDay(!isDay);
    console.log(clickSound);
    if (clickSound.current) {
      clickSound.current.currentTime = 0; // reset if clicked quickly
      clickSound.current.play().catch((err) => {
        console.warn("Sound play blocked:", err);
      });
    }
  };

  useEffect(() => {
    document.body.className = isDay ? "light" : "dark";
  }, [isDay]);

  return (
    <div className={isDay ? "light" : ""}>
      <div onClick={handleToggle} className={`tdnn ${isDay ? "day" : ""}`}>
        <div className={`moon ${isDay ? "sun" : ""}`}></div>
      </div>
    </div>
  );
};

export default Dark;
