import React, { useContext, useEffect } from "react";

// Import the About stylesheet.
import "./about.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Content from "../../Components/Content/Content";
import AboutNavigation from "../../Components/AboutNavigation/AboutNavigation";
import TabController from "../../Components/TabController/TabController";

const About = () => {
  return (
    <div className="about-container no-select">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="nav-container">
        <nav className="nav">
          <AboutNavigation />
        </nav>
      </div>
      <div className="tab-tracker">
        <div className="tab-tracker__tabs">
          <TabController />
        </div>
        <div className="tab-tracker__data">
          <div className="content-container">
            <Content />
          </div>
          <div className="code-container scrollbar">Code Container</div>
        </div>
      </div>
    </div>
  );
};

export default About;
