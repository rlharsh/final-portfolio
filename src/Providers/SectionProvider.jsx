import React, { useState, createContext, useEffect } from "react";
import { DataSections } from "../Data/NavData/NavData";

export const DataSet = createContext(undefined);

const SectionProvider = ({ children }) => {
  const professionalSection = DataSections.find((section) => section.name === "professional");
  const summaryData = professionalSection?.data.find((item) => item.title === "_summary.md");

  const [subSection, setSubSection] = useState({
    section: "professional",
    selected_title: "_summary.md",
    data: professionalSection?.data || [],
    text: summaryData?.text || "",
  });

  const setSection = (name, title) => {
    const sectionData = DataSections.find((section) => section.name === name);

    if (sectionData) {
      console.log("found");
      const selectedItem = sectionData.data.find((item) => item.title === title);
      setSubSection({
        section: name,
        selected_title: title,
        data: sectionData.data,
        text: selectedItem ? selectedItem.text : "",
      });
    }
  };

  return <DataSet.Provider value={{ subSection, setSection }}>{children}</DataSet.Provider>;
};

export default SectionProvider;
