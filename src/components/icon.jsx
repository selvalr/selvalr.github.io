import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaSkype,
  FaLinkedin,
  FaTelegram,
  FaCodepen,
} from "react-icons/fa";

import "../styles/icon.css";

const icons = {
  mail: FaEnvelope,
  location: FaMapMarkerAlt,
  github: FaGithub,
  skype: FaSkype,
  linkedIn: FaLinkedin,
  telegram: FaTelegram,
  codepen: FaCodepen,
};

const Icon = ({ name, size = 24, className = "" }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return <IconComponent size={size} className={className} />;
};

export { Icon };
