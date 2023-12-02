import React, { useContext, useState } from "react";
import { DataSet } from "../../Providers/SectionProvider";

// Import the AboutNavigation stylesheet.
import "./aboutnavigation.css";

const AboutNavigation = () => {
  // Setup the section data provider.
  const { subSection, setSection } = useContext(DataSet);

  // Setup the expanded state.
  const [expanded, setExpanded] = useState(true);

  // Handle the title click event.
  const toggleExpandedState = () => {
    setExpanded((prevState) => !prevState);
  };

  // Handle the change of documents.
  const handleDocument = (title) => {
    setSection(subSection.section, title);
  };

  return (
    <div className="no-select">
      <div className="anav-header">
        <button onClick={toggleExpandedState} className="button button--clear">
          {expanded ? <i className="ri-arrow-down-s-fill"></i> : <i className="ri-arrow-right-s-fill"></i>}
          {subSection.section}
        </button>
      </div>
      <div className="anav-items pointer">
        {subSection.data.map((item, index) =>
          expanded ? (
            <div
              onClick={() => handleDocument(item.title)} // Update here
              key={index}
              className={`${item.title === subSection.selected_title ? "selected" : ""}`}
            >
              <i className="ri-markdown-fill"></i> {item.title}
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default AboutNavigation;
