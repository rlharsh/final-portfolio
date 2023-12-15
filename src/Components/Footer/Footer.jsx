import React from "react";

// Import the footer stylesheet.
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="tagline-social">
        <div className="tagline-social__name">find_me_at:</div>
        <div className="tagline-social__socials">
          <button
            className="button button--clear"
            onClick={(e) =>
              window.open("https://www.linkedin.com/in/ronald-harsh/", "_blank")
            }
          >
            <i className="ri-linkedin-box-fill"></i>
          </button>
        </div>
        <div className="tagline-social__github">
          <p>@rlharsh</p>
          <button
            className="button button--clear"
            onClick={(e) => window.open("https://github.com/rlharsh", "_blank")}
          >
            <i className="ri-github-fill"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
