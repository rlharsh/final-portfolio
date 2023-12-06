import React, { useContext } from "react";
import { DataContact } from "../../Providers/ContactProvider";

// Import the ContactForm stylesheet.
import "./contactform.css";

const ContactForm = () => {
  const { name, email, message, updateName, updateEmail, updateMessage, sent } = useContext(DataContact);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          _name
          <input type="text" name="name" id="name" placeholder="Smithers O'Neil" onChange={(e) => updateName(e.target.value)} />
        </label>
        <label htmlFor="email">
          _email
          <input required type="email" name="email" id="email" placeholder="smithers@wideworldofweb.com" onChange={(e) => updateEmail(e.target.value)} />
        </label>
        <label htmlFor="message">
          _message
          <textarea name="message" id="message" cols="30" rows="10" onChange={(e) => updateMessage(e.target.value)}></textarea>
        </label>
        <button className="btn">submit-message</button>
      </form>
    </div>
  );
};

export default ContactForm;
