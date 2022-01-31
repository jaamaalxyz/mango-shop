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
        <span>
          Developed with &#129505; by <a href="http://">Md. Jamal Uddin</a>
        </span>
        <span>
          Copyright &copy; {new Date().getFullYear()} - Online Mango Store
        </span>
      </p>
    </footer>
  );
}

export default Footer;
