import React from "react";
import "../styles/skill.css"; // Assuming CSS is in the same folder
import { Badge } from "../components/ui/badge";
import IconCloudDemo from "../components/globe";
import { VscVscode } from "react-icons/vsc";
import { FcWorkflow } from "react-icons/fc";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaBootstrap,
  FaDocker,
  FaLinux,
  FaAws,
  FaFigma,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  //   SiVisualstudiocode,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiKubernetes,
  SiMysql,
  SiExpress,
} from "react-icons/si";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSass } from "@fortawesome/free-brands-svg-icons";

import { MdHttp, MdAnimation, MdViewInAr } from "react-icons/md";
import { BiLogoTypescript } from "react-icons/bi";

export default function Skill() {
  const skillsData = [
    {
      title: "Frontend Development",
      icon: "</>",
      iconColor: "text-blue-400",
      skills: [
        {
          name: "React",
          icon: <FaReact color="#61DAFB" />,
          color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs color="white" />,
          color: "bg-gray-500/20 text-gray-300 border-gray-500/30",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript color="#3178C6" />,
          color: "bg-blue-600/20 text-blue-300 border-blue-600/30",
        },
        {
          name: "JavaScript",
          icon: <IoLogoJavascript color="#F0DB4F" />,
          color: "bg-blue-600/20 text-blue-300 border-blue-600/30",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss color="#38B2AC" />,
          color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
        },
        {
          name: "Bootstrap CSS",
          icon: <FaBootstrap color="#712CF9" />,
          color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
        },
        {
          name: "Scss",
          icon: <FontAwesomeIcon icon={faSass} color="#FFC0CB" />,
          color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
        },

        {
          name: "HTML5",
          icon: <FaHtml5 color="#E34F26" />,
          color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt color="#1572B6" />,
          color: "bg-blue-400/20 text-blue-300 border-blue-400/30",
        },
      ],
    },
    {
      title: "Backend Development",
      icon: "🛢️",
      iconColor: "text-green-400",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs color="#339933" />,
          color: "bg-green-500/20 text-green-300 border-green-500/30",
        },
        {
          name: "Express.js",
          icon: <SiExpress color="#f7faf8" />,
          color: "bg-green-500/20 text-green-300 border-green-500/30",
        },
        {
          name: "Python",
          icon: <FaPython color="#3776AB" />,
          color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
        },
        {
          name: "MySQL",
          icon: <SiMysql color="#F29111" />,
          color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb color="#4DB33D" />,
          color: "bg-green-600/20 text-green-300 border-green-600/30",
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 color="#FF6C37" />,
          color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
        },
        // {
        //   name: "GraphQL",
        //   icon: <SiGraphql color="#E10098" />,
        //   color: "bg-pink-500/20 text-pink-300 border-pink-500/30",
        // },
      ],
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      iconColor: "text-purple-400",
      skills: [
        {
          name: "Figma",
          icon: <FaFigma color="#FF2C2C" />,
          color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
        },
        {
          name: "Responsive Design",
          icon: <Layout color="#E10098" />,
          color: "bg-teal-500/20 text-teal-300 border-teal-500/30",
        },
        {
          name: "Wireframing",
          icon: <BsGrid1X2 color="#afeeee" />,
          color: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
        },
        {
          name: "Prototyping",
          icon: <MdAnimation color="#F59E0B" />,
          color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      iconColor: "text-orange-400",
      skills: [
        {
          name: "AWS",
          icon: <FaAws color="#FF9900" />,
          color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
        },
        {
          name: "Docker",
          icon: <FaDocker color="#2496ED" />,
          color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
        },
        {
          name: "CI/CD",
          icon: <FcWorkflow />,
          color: "bg-green-500/20 text-green-300 border-green-500/30",
        },
        // {
        //   name: "Kubernetes",
        //   icon: <SiKubernetes color="#326CE5" />,
        //   color: "bg-blue-600/20 text-blue-300 border-blue-600/30",
        // },
        {
          name: "Git",
          icon: <FaGitAlt color="#F05032" />,
          color: "bg-red-500/20 text-red-300 border-red-500/30",
        },
        {
          name: "Linux",
          icon: <FaLinux color="#FCC624" />,
          color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
        },
        {
          name: "GitHub",
          icon: <FaGithub />,
          color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
        },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "⚙️",
      iconColor: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <VscVscode color="#FCC624" />,
          color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
        },
        {
          name: "Jest",
          icon: <SiJest color="#C21325" />,
          color: "bg-red-500/20 text-red-300 border-red-500/30",
        },
        {
          name: "Webpack",
          icon: <SiWebpack color="#8DD6F9" />,
          color: "bg-blue-400/20 text-blue-300 border-blue-400/30",
        },
        {
          name: "Redux",
          icon: <SiRedux color="#764ABC" />,
          color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
        },
        {
          name: "Firebase",
          icon: <SiFirebase color="#FFCA28" />,
          color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
        },
        {
          name: "Vercel",
          icon: <SiVercel color="white" />,
          color: "bg-gray-500/20 text-gray-300 border-gray-500/30",
        },
        {
          name: "Vite",
          icon: <SiVite color="#646CFF" />,
          color: "bg-purple-600/20 text-purple-300 border-purple-600/30",
        },
      ],
    },
    {
      title: "Creative Skills",
      icon: "✨",
      iconColor: "text-yellow-400",
      skills: [
        {
          name: "UI Animation",
          icon: <MdAnimation color="#FF4081" />,
          color: "bg-pink-500/20 text-pink-300 border-pink-500/30",
        },
        {
          name: "SVG Animation",
          icon: <MdAnimation color="#00C853" />,
          color: "bg-green-500/20 text-green-300 border-green-500/30",
        },
        {
          name: "3D Modeling",
          icon: <Cpu color="#7C4DFF" />,
          color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
        },
        {
          name: "Motion Graphics",
          icon: <MdAnimation color="#FF6D00" />,
          color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
        },
      ],
    },
  ];

  return (
    <main className="skill-main">
      <div className="skill-container">
        <h1 className="skill-title">
          Skills <span className="pink-tech"> & Technologies </span>{" "}
        </h1>
        <IconCloudDemo />
        <div className="skill-grid group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 ">
          {skillsData.map((category, index) => (
            <div className="shimmer-wrapper" key={index}>
              <div className="shimmer-wrapper"></div>
              <div className="shimmer-effect"></div>
              <div
                key={index}
                className="skill-card "
                id={category.title.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase()}
              >
                <div className="skill-header">
                  <span className={`skill-icon ${category.iconColor}`}>
                    {category.icon}
                  </span>
                  <h3 className="skill-category">{category.title}</h3>
                </div>

                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`skill-tag ${skill.color}`}
                    >
                      {skill.icon && (
                        <span className="text-sm" style={{ padding: "0.2em" }}>
                          {skill.icon}
                        </span>
                      )}{" "}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
