import React, { useContext } from "react";

import { DataSet } from "../../Providers/SectionProvider";
import MDProcessor from "../MDProcessor/MDProcessor";

// Import the content stylesheet.
import "./content.css";

const Content = () => {
  const { subSection, setSection } = useContext(DataSet);

  return (
    <div className="code-wrapper">
      <MDProcessor sectionName={subSection.section} title={subSection.selected_title} />
    </div>
  );
};

export default Content;
