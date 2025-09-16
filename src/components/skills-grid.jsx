import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../components/ui/badge";
import "../styles/SkillsGrid.css"; // Your custom styles

const skillsData = [
  {
    title: "Frontend Development",
    icon: "</>",
    iconColor: "text-blue-400",
    skills: [
      {
        name: "React",
        color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      },
      {
        name: "Next.js",
        color: "bg-gray-500/20 text-gray-300 border-gray-500/30",
      },
      {
        name: "TypeScript",
        color: "bg-blue-600/20 text-blue-300 border-blue-600/30",
      },
      {
        name: "Tailwind CSS",
        color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      },
      {
        name: "HTML5",
        color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      },
      {
        name: "CSS3",
        color: "bg-blue-400/20 text-blue-300 border-blue-400/30",
      },
    ],
  },
  {
    title: "Backend Development",
    icon: "🗄️ ",
    iconColor: "text-green-400",
    skills: [
      {
        name: "Node.js",
        color: "bg-green-500/20 text-green-300 border-green-500/30",
      },
      {
        name: "Python",
        color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      },
      {
        name: "PostgreSQL",
        color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      },
      {
        name: "MongoDB",
        color: "bg-green-600/20 text-green-300 border-green-600/30",
      },
      {
        name: "REST APIs",
        color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      },
      {
        name: "GraphQL",
        color: "bg-pink-500/20 text-pink-300 border-pink-500/30",
      },
    ],
  },
  {
    title: "UI/UX Design",
    icon: "🎨 ",
    iconColor: "text-purple-400",
    skills: [
      {
        name: "Figma",
        color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      },
      {
        name: "Responsive Design",
        color: "bg-teal-500/20 text-teal-300 border-teal-500/30",
      },
      {
        name: "Wireframing",
        color: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      },
      {
        name: "Prototyping",
        color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️ ",
    iconColor: "text-orange-400",
    skills: [
      {
        name: "AWS",
        color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      },
      {
        name: "Docker",
        color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      },
      {
        name: "CI/CD",
        color: "bg-green-500/20 text-green-300 border-green-500/30",
      },
      {
        name: "Kubernetes",
        color: "bg-blue-600/20 text-blue-300 border-blue-600/30",
      },
      { name: "Git", color: "bg-red-500/20 text-red-300 border-red-500/30" },
      {
        name: "Linux",
        color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: "⚙️ ",
    iconColor: "text-pink-400",
    skills: [
      {
        name: "VS Code",
        color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      },
      { name: "Jest", color: "bg-red-500/20 text-red-300 border-red-500/30" },
      {
        name: "Webpack",
        color: "bg-blue-400/20 text-blue-300 border-blue-400/30",
      },
      {
        name: "Redux",
        color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      },
      {
        name: "Firebase",
        color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      },
      {
        name: "Vercel",
        color: "bg-gray-500/20 text-gray-300 border-gray-500/30",
      },
      {
        name: "Vite",
        color: "bg-purple-600/20 text-purple-300 border-purple-600/30",
      },
    ],
  },
  {
    title: "Creative Skills",
    icon: "✨ ",
    iconColor: "text-yellow-400",
    skills: [
      {
        name: "UI Animation",
        color: "bg-pink-500/20 text-pink-300 border-pink-500/30",
      },
      {
        name: "SVG Animation",
        color: "bg-green-500/20 text-green-300 border-green-500/30",
      },
      {
        name: "3D Modeling",
        color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      },
      {
        name: "Motion Graphics",
        color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      },
    ],
  },
];

export default function SkillsGrid() {
  return (
    <div className="skills-grid">
      {skillsData.map((category, index) => (
        <Card key={index} className="skill-card">
          <CardContent className="skill-card-content">
            <div className="skill-header">
              <span className={`skill-icon ${category.iconColor}`}>
                {category.icon}
              </span>
              <h3 className="skill-title">{category.title}</h3>
            </div>

            <div className="skill-badges">
              {category.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="outline"
                  className={`skill-badge ${skill.color}`}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
