import React, { useEffect, useState } from "react";

// Import the header.css file
import "./header.css";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Menu toggle functionality
  const toggleMenu = () => {
    setMenuOpen((previousState) => !previousState);
  };

  const buttonTabs = [
    {
      title: "_hello",
      path: "/",
    },
    {
      title: "_about_me",
      path: "/about",
    },
    {
      title: "_my_projects",
      path: "/projects",
    },
  ];

  const gotoContact = () => {
    navigate("/contact");
  };

  // Responsible for rendering the navigation tabs.
  const renderTabs = () => {
    return buttonTabs.map((buttonTab, index) => (
      <HeaderTab
        key={index}
        path={buttonTab.path}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
      >
        {buttonTab.title}
      </HeaderTab>
    ));
  };

  return (
    <header className="header">
      {/* Name section, top-left */}
      <div className="header__name">
        <i className="ri-terminal-box-fill"></i>
        <p>
          &gt; <span className="purple">ronald-harsh</span>
        </p>
      </div>

      {/* Navigation Tabs */}
      <nav className={`header__nav`}>
        <div className={`header__nav__inner ${menuOpen ? "visible" : ""}`}>
          {renderTabs()}
        </div>
        <div className="header__nav__outer">
          <button className="button button--clear" onClick={gotoContact}>
            <i className="ri-mail-fill"></i> _contact_me
          </button>
        </div>
      </nav>

      {/* Menu Toggle Button */}
      <div className="header__menu">
        <button className="button button--clear" onClick={toggleMenu}>
          <i
            className={
              menuOpen ? `ri-menu-fold-line orange` : `ri-menu-unfold-line`
            }
          ></i>
        </button>
      </div>
    </header>
  );
};

/// Header Tab Component
const HeaderTab = ({ children, path, toggleMenu, menuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabClick = () => {
    navigate(path);
  };

  return (
    <div
      className={`header-tab ${
        location.pathname === path ? "header-tab__visible" : ""
      }`}
      onClick={() => {
        if (menuOpen) {
          toggleMenu();
        }
        tabClick();
      }}
    >
      {children}
    </div>
  );
};

export default Header;
