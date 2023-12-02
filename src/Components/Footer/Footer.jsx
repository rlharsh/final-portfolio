import React from "react";

// Import the footer stylesheet.
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="tagline-social">
        <div className="tagline-social__name">find_me_at:</div>
        <div className="tagline-social__socials">
          <i className="ri-linkedin-box-fill"></i>
          <i className="ri-twitter-x-fill"></i>
          <i className="ri-instagram-fill"></i>
        </div>
        <div className="tagline-social__github">
          <p>@rlharsh</p>
          <i className="ri-github-fill"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
