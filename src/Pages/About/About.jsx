import React, { useContext, useEffect } from "react";

// Import the About stylesheet.
import "./about.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Content from "../../Components/Content/Content";
import AboutNavigation from "../../Components/AboutNavigation/AboutNavigation";

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
      <div className="content-container">
        <Content />
      </div>
      <div className="code-container scrollbar"></div>
    </div>
  );
};

export default About;
