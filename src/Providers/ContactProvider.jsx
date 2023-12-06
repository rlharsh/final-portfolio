import React, { createContext, useState } from "react";

export const DataContact = createContext(undefined);

const ContactProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const updateName = (value) => {
    setName(value);
  };

  const updateEmail = (value) => {
    setEmail(value);
  };

  const updateMessage = (value) => {
    setMessage(value);
  };

  const updateSent = (value) => {
    setSent(value);
  };

  return <DataContact.Provider value={{ updateName, updateEmail, updateMessage, name, email, message, sent }}>{children}</DataContact.Provider>;
};

export default ContactProvider;
