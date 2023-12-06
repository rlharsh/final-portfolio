import React, { useContext } from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import ContactCode from "../../Components/ContactCode/ContactCode";
import ContactCard from "../../Components/ContactCard/ContactCard";

const Contact = () => {
  return (
    <div className="about-container no-select">
      <div className="nav-container no-side">
        <nav className="nav">
          <ContactCard />
        </nav>
      </div>
      <div className="tab-tracker">
        <div className="tab-tracker__data">
          <div className="content-container">
            <ContactForm />
          </div>
          <div className="live-code">
            <ContactCode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
