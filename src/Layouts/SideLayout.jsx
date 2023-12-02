import React from "react";
import { Outlet } from "react-router-dom";

// Import the SideLaout stylesheet.
import "./sidelayout.css";
import SectionProvider from "../Providers/SectionProvider";

const SideLayout = () => {
  return (
    <SectionProvider>
      <div className="side-layout">
        <Outlet />
      </div>
    </SectionProvider>
  );
};

export default SideLayout;
