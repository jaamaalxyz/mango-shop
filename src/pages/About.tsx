import React from "react";

function About() {
  return (
    <div className="about-page">
      <h4>
        A Simple Online Shopping Cart built with{" "}
        <a href="http://reactjs.org" target="_blank" rel="noopener noreferrer">
          React.js
        </a>{" "}
        Hooks and Context API
      </h4>
      <p>
        Code is available at{" "}
        <a
          href="https://github.com/jaamaal95/react-shop"
          target="blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
    </div>
  );
}

export default About;
