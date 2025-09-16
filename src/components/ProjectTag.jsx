import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected ? "tag-btn selected" : "tag-btn";
  return (
    <button
      className={`${buttonStyles} btnsShow`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
