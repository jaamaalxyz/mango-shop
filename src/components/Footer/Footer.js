import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <p>
        Copyright &copy; {new Date().getFullYear()} An Online Store | Built with{" "}
        <a href="http://reactjs.org" target="_blank" rel="noreferrer">
          ReactJs
        </a>
      </p>
    </footer>
  );
}

export default Footer;
