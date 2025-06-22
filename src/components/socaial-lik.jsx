import React from "react";
import { Icon } from "../components/icon";
import "../styles/social.css";

const SocialLink = ({ href, title, iconName, size = 24, className = "" }) => {
  return (
    <a
      className={`social-link ${className}`}
      href={href}
      aria-label={title}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="social-icon" size={size} name={iconName} />
    </a>
  );
};

export { SocialLink };
