import React,{useRef,useEffect} from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  FolderOpen,
  Mail,
  Twitter,
  Linkedin,
  Github,
  X,
} from "lucide-react";
import "../styles/Sidebar.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import profileImg from "../assets/sidebarProfile.jpg";

const navVariants = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.5,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarRef = useRef(null);
   // Detect outside clicks
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose(); // Close sidebar
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const navigationItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: User, label: "About", path: "/about" },
    { icon: Code, label: "Skills", path: "/skills" },
    { icon: Briefcase, label: "Projects", path: "/projects" },
    { icon: FolderOpen, label: "Experience", path: "/experience" },
    { icon: FolderOpen, label: "Certification", path: "/certificates" },
    { icon: Mail, label: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/selva_lr", label: "Twitter" },
    {
      icon: Linkedin,
      href: "www.linkedin.com/in/selvamanan",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/selvalr", label: "GitHub" },
    { icon: Mail, href: "mailto:selvamanan369@gmail.com", label: "Email" },
  ];

  return (
    <motion.div
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"} // animate based on isOpen
      variants={navVariants}
      exit="hidden"
      className="navbar-container"
    >
       {/* Overlay background for outside click */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      <aside  ref={sidebarRef} className={`scroll2 sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <button className="sidebar__close" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="sidebar__header">
          <div className="sidebar__avatar">
            <img src={profileImg} alt="Selvamanan" />
          </div>

          <h2 className="sidebar__name">SELVAMANAN R</h2>
        </div>

        {/* <Bulb /> */}

        <nav className="sidebar__nav">
          {navigationItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `sidebar__nav-item ${isActive ? "active" : ""}`
              }
              onClick={onClose}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>

            // <a key={index} href={item.href} className="sidebar__nav-item" onClick={onClose}>
            //   <item.icon size={20} />
            //   <span>{item.label}</span>
            // </a>
          ))}
        </nav>

        <div className="sidebar__social">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="sidebar__social-link"
              aria-label={social.label}
              target="_blank"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        <div className="sidebar__footer">
          <p>&copy; Copyright &copy;2025</p>
          <p>All rights reserved |</p>
        </div>
      </aside>
    </motion.div>
  );
};

export default Sidebar;
