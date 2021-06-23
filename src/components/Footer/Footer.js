import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <p>
        Copyright &copy; {new Date().getFullYear()} Online Store | Built with{" "}
        <a href="http://reactjs.org" target="_blank" rel="noreferrer">
          React.js
        </a>
      </p>
    </footer>
  );
}

export default Footer;
