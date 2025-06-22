import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experince.css";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1 style={{ textAlign: "center" }}>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#272822" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2022 - present"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Sri Super Vintech
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Alangulam,Tamilnadu
            </h4>
            <p>
              Developed and maintained ASP.NET-based billing software to
              streamline invoicing, payment processing, and customer management.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#272822" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2020 - 2022"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Freelance Web Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
              Freelance Web Developer specializing in building responsive
              websites and web applications using front-end and back-end
              technologies.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#272822" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2017 - 2020"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              V.H.N.S.N.Collage
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Virudhunagar, TamilNadu
            </h4>
            <p>BCA (Bachelor of Computer Applications)</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#272822" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2015 - 2017"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tenkasi, TamilNadu
            </h4>
            <p>Higher Secondary Certificate Examination</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
