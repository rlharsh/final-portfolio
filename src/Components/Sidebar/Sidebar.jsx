import React, { useContext } from "react";

// Import the Sidebar stylesheet.
import "./sidebar.css";
import { DataSet } from "../../Providers/SectionProvider";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const { subSection, setSection } = useContext(DataSet);
  console.log(subSection);

  const handleClick = (section, title) => {
    setSection(section, title);
  };

  return (
    <div className="sidebar">
      <button className="button button--clear" onClick={() => handleClick("professional", "_summary.md")}>
        <i className={`ri-terminal-box-fill ${subSection.section === "professional" ? "path-selected" : ""}`}></i>
      </button>
      <button className="button button--clear" onClick={() => handleClick("personal", "_fishing.md")}>
        <i className={`ri-user-4-fill ${subSection.section === "personal" ? "path-selected" : ""}`}></i>
      </button>
      <button className="button button--clear" onClick={() => handleClick("hobbies", "_gaming.md")}>
        <i className={`ri-gamepad-fill ${subSection.section === "hobbies" ? "path-selected" : ""}`}></i>
      </button>
    </div>
  );
};

export default Sidebar;
