import React, { useState, useEffect } from "react";
import "../styles/Dark.css"; // Your CSS goes here

const Dark = () => {
  const [isDay, setIsDay] = useState(false);

  const handleToggle = () => {
    setIsDay(!isDay);
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
