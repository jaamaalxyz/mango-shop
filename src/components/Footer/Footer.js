import React from "react";
import "./footer.css";

const MangoImage = process.env.PUBLIC_URL + "/favicon-32x32.png";

function Footer() {
  return (
    <footer>
      <section>
        <img src={MangoImage} alt="mango Shop" />
        <h2>Mango Shop</h2>
      </section>
      <p>
        Developed with &#129505; by <a href="http://">Md. Jamal Uddin</a>
      </p>
      <p>
        Copyright &copy; {new Date().getFullYear()} Online Mango Store | Built
        with{" "}
        <a href="http://reactjs.org" target="_blank" rel="noreferrer">
          React.js
        </a>
      </p>
    </footer>
  );
}

export default Footer;
