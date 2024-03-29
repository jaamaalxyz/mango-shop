import React, { useContext } from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import { StateContext } from "../../context/GlobalState";

// @ts-ignore
function ProductItem({ product }) {
  // consuming contexts
  // @ts-ignore
  const { addToCart, favoriteItems, addToFavorite, removeFromFavorite } =
    useContext(StateContext);

  // Cart button display
  function cartButton() {
    return (
      <button onClick={() => addToCart(product)} className="add-cart-btn">
        Add to Cart
      </button>
    );
  }

  // determine which Favorite button to display
  function favoriteButton() {
    // check which product is already favorited
    const alreadyFavorited = favoriteItems.some(
      // @ts-ignore
      (item) => item.id === product.id
    );

    if (alreadyFavorited) {
      return (
        <i
          onClick={() => removeFromFavorite(product.id)}
          className="ri-heart-fill favorite favorite-btn"
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => addToFavorite(product)}
          className="ri-heart-line favorite favorite-btn"
        ></i>
      );
    }
  }

  // render JSX
  return (
    <div key={product.id} className="product-card">
      <LazyLoad height={200}>
        <div className="product-image">
          {/* product image */}
          <img src={product.url} alt="product" />
        </div>
        <div className="product-info">
          {/* product title */}
          <h5>{product.title}</h5>

          {/* product price */}
          <h6>$ {product.price}</h6>

          {/* favorite button */}
          {favoriteButton()}

          {/* cart button */}
          {cartButton()}

          {/* detail button */}
          <Link to={`/product/${product.id}`}>
            <button className="view-detail-btn">View Details</button>
          </Link>
        </div>
      </LazyLoad>
    </div>
  );
}

export default ProductItem;
