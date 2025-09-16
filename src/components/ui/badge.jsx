import React from "react";
import "../../styles/Badge.css"; // Link your CSS file

function Badge({ className = "", variant = "default", ...props }) {
  return <div className={`badge badge--${variant} ${className}`} {...props} />;
}

export { Badge };
