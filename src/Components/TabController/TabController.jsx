import React, { useContext, useEffect, useState } from "react";

// Import the TabController stylesheet
import "./tabcontroller.css";
import { DataSet } from "../../Providers/SectionProvider";

const TabController = () => {
  const { subSection, setSection } = useContext(DataSet);
  const [tabs, setTabs] = useState([]);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (closing) {
      setClosing(false);
      return;
    }

    const tabExists = tabs.some((tab) => tab.selected_title === subSection.selected_title);

    if (!tabExists && subSection.selected_title) {
      setTabs([...tabs, subSection]);
    }
  }, [subSection]);

  const removeTab = (section) => {
    if (tabs.length > 1) {
      setTabs((currentTabs) => currentTabs.filter((tab) => tab.selected_title !== section.selected_title));
      setClosing(true);
      setSection(tabs[0].section, tabs[0].selected_title);
    }
  };

  return (
    <div className="tabcontroller">
      {tabs.map((tab) => (
        <NavTab path={tab} key={tab.selected_title} removeTab={removeTab} />
      ))}
    </div>
  );
};

export default TabController;

const NavTab = ({ path, removeTab }) => {
  const [selected, setSelected] = useState(false);
  const { setSection, subSection } = useContext(DataSet);

  const handleClick = () => {
    setSection(path.section, path.selected_title);
  };

  const removeThisTab = (e) => {
    e.stopPropagation();
    removeTab(path);
  };

  useEffect(() => {
    setSelected(subSection.selected_title === path.selected_title);
  }, [subSection]);

  return (
    <div className={`nav-tab ${selected ? "purple" : ""}`} onClick={handleClick}>
      {path.selected_title}
      <button className="button button--clear" onClick={removeThisTab}>
        <i className="ri-close-line"></i>
      </button>
    </div>
  );
};
