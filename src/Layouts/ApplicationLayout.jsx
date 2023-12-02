import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

// Import the ApplicationLayout stylesheet.
import "./applicationlayout.css";

const ApplicationLayout = () => {
  return (
    <div className="applicationlayout">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default ApplicationLayout;
