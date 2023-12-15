import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContact } from "../../Providers/ContactProvider";
import hljs from "highlight.js";
import Highlight from "react-highlight";

const ContactCode = () => {
  const { name, email, message } = useContext(DataContact);
  const [contact, setContact] = useState(null);
  const codeRef = useRef(null);

  const getDate = () => {
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    var today = new Date();

    return today.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const data = `const button = document.querySelector('#sendButton');\n\nconst message = {\n\tname: "${name}",\n\temail: "${email}"\n\tmessage: "${message}",\n\tdate: "${getDate()}"\n\n};\n\n\n// Send the message on click.\nbutton.addEventListener('click', () => {\n\tform.send(message);\n}`;

    if (codeRef.current) {
      codeRef.current.textContent = data;
      hljs.highlightElement(codeRef.current);
    }

    setContact(data);
  }, [name, email, message]);

  return (
    <div className="javascript-block">
      <pre>
        <Highlight className="javascript">{contact}</Highlight>
      </pre>
    </div>
  );
};

export default ContactCode;
