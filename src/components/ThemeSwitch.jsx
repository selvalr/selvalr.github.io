import React, { useEffect } from "react";
import SunIcon from "../assets/Sun.svg";
import MoonIcon from "../assets/Moon.svg";
import "../styles/DarkMode.css";

const ThemeSwitch = () => {
  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    document.body.setAttribute("data-theme", selectedTheme || "light");
  }, []);

  const toggleTheme = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("selectedTheme", newTheme);
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={localStorage.getItem("selectedTheme") === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={SunIcon} alt="Light Mode" className="icon" />
        <img src={MoonIcon} alt="Dark Mode" className="icon" />
      </label>
    </div>
  );
};

export default ThemeSwitch;
