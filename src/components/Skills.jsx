import React from "react";
import "../styles/Skills.css";

// Skill Icons
import Htmls from "../assets/skills/html.svg";
import Css from "../assets/skills/css3.svg";
import Js from "../assets/skills/js.svg";
import TypeScript from "../assets/skills/TypeScript.svg";
import Reactjs from "../assets/skills/react.svg";
import Bootstr from "../assets/skills/Bootstrap.svg";
import Tailwinded from "../assets/skills/Tailwind CSS.svg";
import ReducTool from "../assets/skills/Redux.svg";
import Node from "../assets/skills/Node.js.svg";
import Express from "../assets/skills/expressjslogo.png";
import MongoDBs from "../assets/skills/mongodb.png";
import MysQl from "../assets/skills/mysql.svg";
import Git from "../assets/skills/git-icon.svg";
import Github from "../assets/skills/github-icon.svg";
import JWT from "../assets/skills/jwt-3.svg";
import AWS from "../assets/skills/AWS.svg";
import Docker from "../assets/skills/Docker.svg";
import RestApi from "../assets/skills/api-icon.svg";
import SASS from "../assets/skills/sass.svg";
import VSCode from "../assets/skills/vsco.svg";
import NPM from "../assets/skills/NPM.svg";
import Postman from "../assets/skills/Postman.svg";

const Skills = () => {
  return (
    <section id="experience">
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Frontend */}
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {[
                { icon: Htmls, name: "HTML", level: "Experienced" },
                { icon: Css, name: "CSS", level: "Experienced" },
                { icon: Js, name: "JavaScript", level: "Experienced" },
                { icon: TypeScript, name: "TypeScript", level: "Intermediate" },
                { icon: Reactjs, name: "React.js", level: "Experienced" },
                { icon: Bootstr, name: "Bootstrap", level: "Intermediate" },
                {
                  icon: Tailwinded,
                  name: "Tailwind CSS",
                  level: "Experienced",
                },
                {
                  icon: ReducTool,
                  name: "Redux Toolkit",
                  level: "Intermediate",
                },
                { icon: SASS, name: "SASS/SCSS", level: "Intermediate" },
              ].map(({ icon, name, level }) => (
                <article key={name}>
                  <img src={icon} alt={`${name} icon`} className="icon" />
                  <div>
                    <h3>{name}</h3>
                    <p>{level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              {[
                { icon: Node, name: "Node.js", level: "Experienced" },
                { icon: Express, name: "Express.js", level: "Experienced" },
                { icon: MongoDBs, name: "MongoDB", level: "Experienced" },
                { icon: MysQl, name: "MySQL", level: "Intermediate" },
              ].map(({ icon, name, level }) => (
                <article key={name}>
                  <img src={icon} alt={`${name} icon`} className="icon" />
                  <div>
                    <h3>{name}</h3>
                    <p>{level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Others */}
        <div className="details-container">
          <h2 className="experience-sub-title">Clouds & Others</h2>
          <div className="article-container">
            {[
              { icon: AWS, name: "AWS", level: "Basic" },
              { icon: Docker, name: "Docker", level: "Basic" },
              { icon: Git, name: "Git", level: "Experienced" },
              { icon: Github, name: "GitHub", level: "Experienced" },
              { icon: JWT, name: "JWT", level: "Intermediate" },
              { icon: RestApi, name: "REST APIs", level: "Experienced" },
              {
                icon: VSCode,
                name: "VS Code",
                level: "Experienced",
              },
              {
                icon: NPM,
                name: "NPM Package",
                level: "Intermediate",
              },
              { icon: Postman, name: "POSTMAN", level: "Intermediate" },
            ].map(({ icon, name, level }) => (
              <article key={name}>
                <img src={icon} alt={`${name} icon`} className="icon" />
                <div>
                  <h3>{name}</h3>
                  <p>{level}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Arrow Navigation */}
      {/* <img
        src={require("../assets/arrow.png")}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "#projects")}
      /> */}
    </section>
  );
};

export default Skills;
