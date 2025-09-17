import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TocIcon from "@mui/icons-material/Toc";
import "../styles/Navbar.css";
import ThemeSwitch from "./ThemeSwitch";
import Certificates from "./Certification";
import Dark from "./Dark";
import { Divide as Hamburger } from "hamburger-react";
import { FaHome } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { IoBag } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import HamburgerButton from "./HamburgerButton";

import useIsMobile from "../components/hooks/useIsMobile";

import Bulb from "./Bulb";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const isMobile = useIsMobile(768);
  const [isDay, setIsDay] = useState(false);
  useEffect(() => {
    document.body.className = isDay ? "light" : "dark";
  }, [isDay]);

  const location = useLocation();

  const [isLight, setIsLight] = useState(document.body.className === "light");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.body.className === "light");
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HamburgerButton onClick={toggleSidebar} isOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <nav className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="logo">
          {" "}
          <h1 className="logo-heading">
            <span className="logoName">SELVA</span>
          </h1>{" "}
        </div>

        <div className="links">
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
          >
            <FaHome />
            Home
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active-link" : ""}
          >
            <FaUser />
            About
          </Link>
          <Link
            to="/skills"
            className={location.pathname === "/skills" ? "active-link" : ""}
          >
            <FaLightbulb />
            Skills
          </Link>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active-link" : ""}
          >
            <FaBrain />
            Projects
          </Link>
          <Link
            to="/experience"
            className={location.pathname === "/experience" ? "active-link" : ""}
          >
            <IoBag />
            Experience
          </Link>
          <Link
            to="/certificates"
            className={
              location.pathname === "/certificates" ? "active-link" : ""
            }
          >
            <PiCertificateFill />
            Certificates
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active-link" : ""}
          >
            <IoIosChatboxes />
            Contact
          </Link>
          <div
            className={`switch ${expandNavbar ? "active" : "inactive"}`}
            id="switch"
          ></div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isMobile ? (
            <div className="darkLightButton">
              <Bulb isOn={!isDay} setIsOn={(v) => setIsDay(!v)} />
            </div>
          ) : (
            <Dark isDay={isDay} setIsDay={setIsDay} />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
