import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../context/GlobalState";
import "./header.css";

const MangoImage = process.env.PUBLIC_URL + "/favicon-32x32.png";

function Header() {
  // consuming context
  // @ts-ignore
  const { totalItems, favoriteItems } = useContext(StateContext);

  // render JSX
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={MangoImage} alt="mango shop" />{" "}
          <span id="logo-text">Mango Shop</span>
        </Link>
      </div>
      <ul className="nav-items">
        <li>
          <Link to="/">Store</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <ul className="nav-icons">
        <li>
          <Link to="/wishlist">
            <i className="ri-heart-2-line"></i>
            <span className="item-count">{favoriteItems.length}</span>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <i className="ri-shopping-basket-2-line"></i>
            <span className="item-count">{totalItems}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
