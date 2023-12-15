import React, { useContext, useState } from "react";
import { DataSet } from "../../Providers/SectionProvider";
import "./aboutnavigation.css";

const AboutNavigation = () => {
  const { subSection, setSection } = useContext(DataSet);
  const [expanded, setExpanded] = useState(true);

  const toggleExpandedState = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <div className="box no-select">
      <div className="anav-header">
        <button
          onClick={toggleExpandedState}
          className="button button--clear white"
        >
          {expanded ? (
            <i className="ri-arrow-down-s-fill"></i>
          ) : (
            <i className="ri-arrow-right-s-fill"></i>
          )}
          {subSection.section}
        </button>
      </div>
      {expanded && (
        <div className="anav-items pointer">
          {subSection.data.map((item) => (
            <div
              onClick={() => setSection(subSection.section, item.title)}
              key={item.id || item.title}
              className={`item ${
                item.title === subSection.selected_title ? "selected" : ""
              }`}
            >
              <i className="ri-markdown-fill"></i> {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutNavigation;
