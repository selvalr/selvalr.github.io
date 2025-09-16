import React from "react";
import "../styles/Pro.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSass,
  SiJquery,
  SiRedux,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGraphql,
  SiNextdotjs,
  SiDocker,
  SiKubernetes,
  SiFirebase,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const techIcons = {
  // 🟢 Basics
  html: <FaHtml5 className="tech-icon html" color="#E34F26" />,
  css: <FaCss3Alt className="tech-icon css" color="#1572B6" />,
  js: <FaJs className="tech-icon js" color="#F7DF1E" />,

  // 🎨 Styling & UI
  bootstrap: <FaBootstrap className="tech-icon bootstrap" color="#7952B3" />,
  tailwind: <SiTailwindcss className="tech-icon tailwind" color="#06B6D4" />,
  sass: <SiSass className="tech-icon sass" color="#CC6699" />,

  // ⚡ JS Libraries
  jquery: <SiJquery className="tech-icon jquery" color="#0769AD" />,
  react: <FaReact className="tech-icon react" color="#61DAFB" />,
  redux: <SiRedux className="tech-icon redux" color="#764ABC" />,
  typescript: <SiTypescript className="tech-icon typescript" color="#3178C6" />,
  next: <SiNextdotjs className="tech-icon next" color="#FFFFFF" />,

  // 🌐 Backend
  node: <FaNodeJs className="tech-icon node" color="#339933" />,
  express: <SiExpress className="tech-icon express" color="#FFFFFF" />,

  // 🗄️ Databases
  mongodb: <SiMongodb className="tech-icon mongodb" color="#47A248" />,
  mysql: <SiMysql className="tech-icon mysql" color="#4479A1" />,
  postgresql: <SiPostgresql className="tech-icon postgresql" color="#4169E1" />,
  graphql: <SiGraphql className="tech-icon graphql" color="#E10098" />,
  firebase: <SiFirebase className="tech-icon firebase" color="#FFCA28" />,

  // 🛠️ Tools
  git: <FaGitAlt className="tech-icon git" color="#F05032" />,
  github: <FaGithub className="tech-icon github" color="#FFFFFF" />,
  vscode: <VscVscode className="tech-icon vscode" color="#0078D7" />,
  docker: <SiDocker className="tech-icon docker" color="#2496ED" />,
  kubernetes: <SiKubernetes className="tech-icon kubernetes" color="#326CE5" />,

  // 🚀 Deployment
  vercel: <SiVercel className="tech-icon vercel" color="#FFFFFF" />,
  netlify: <SiNetlify className="tech-icon netlify" color="#00C7B7" />,
};

export default function Pro({
  title,
  description,
  imgUrl,
  gitUrl,
  previewUrl,
  technologies = [],
}) {
  return (
    <div className="card">
      <img className="card-img" src={imgUrl} alt={title} />

      {/* optional small logo */}
      <div className="logo-badge" aria-hidden>
        {/* put an <img src="/logo.png" style={{width:22}} /> or an svg */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#38bdf8" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>

        {technologies.length > 0 && (
          <>
            <div className="tech-title">
              <span className="tech-side"></span>
              Technologies Used
              <span className="tech-side"></span>
            </div>
            <div className="tech-list">
              {technologies.map((t, i) => (
                <span key={i} className="tech">
                  {/* optional icon: <img className="tech-icon" src={`/icons/${t.toLowerCase()}.svg`} alt="" /> */}
                  {techIcons[t.toLowerCase()] && (
                    <span className="tech-icon">
                      {techIcons[t.toLowerCase()]}
                    </span>
                  )}
                  <span className="tech-label">{t}</span>
                  {/* {t} */}
                </span>
              ))}
            </div>
          </>
        )}

        <div className="btn-group">
          {gitUrl && (
            <a
              className="btnDemo"
              href={gitUrl}
              target="_blank"
              rel="noreferrer"
            >
              🔗 Source Code
            </a>
          )}
          {previewUrl && (
            <a
              className="btnDemo"
              href={previewUrl}
              target="_blank"
              rel="noreferrer"
            >
              ▶ Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
