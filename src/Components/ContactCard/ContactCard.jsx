import React, { useState } from "react";

import "./contactcard.css";

const ContactCard = () => {
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
          contacts
        </button>
      </div>
      {expanded && (
        <div className="anav-items pointer">
          <div className="contact-box">
            <i className="ri-mail-fill"></i>
            <p>ronald.harsh@protonmail.com</p>
          </div>
          <div className="contact-box">
            <i class="ri-phone-fill"></i>
            <p>+1 (715) 600-1931</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactCard;
