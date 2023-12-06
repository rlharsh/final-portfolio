import React from "react";
import { Outlet } from "react-router-dom";

// Import the SideLaout stylesheet.
import "./sidelayout.css";
import SectionProvider from "../Providers/SectionProvider";
import ContactProvider from "../Providers/ContactProvider";

const SideLayout = () => {
  return (
    <ContactProvider>
      <SectionProvider>
        <div className="side-layout">
          <Outlet />
        </div>
      </SectionProvider>
    </ContactProvider>
  );
};

export default SideLayout;
