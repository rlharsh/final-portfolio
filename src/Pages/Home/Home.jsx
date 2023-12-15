import React from "react";

// Import the Home stylesheet.
import "./home.css";

const Home = () => {
  return (
    <div className="hero-container flex center no-select">
      <div className="home-box">
        <div className="splash-one"></div>
        <div className="splash-two"></div>
        <div className="home-box__left">
          <p>Hello, I am</p>
          <h1>Ronald Harsh</h1>
          <p>
            <span className="code-text">&gt; Front-end developer</span>
          </p>
          <p className="start">/* to start, click on a tab above */</p>
        </div>
        <div className="home-box__right"></div>
      </div>
    </div>
  );
};

export default Home;
