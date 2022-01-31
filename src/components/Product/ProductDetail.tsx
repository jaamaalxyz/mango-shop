import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../../context/GlobalState";

function ProductDetail() {
  // consuming contexts
  // @ts-ignore
  const { addToCart } = useContext(StateContext);

  // get id of current product
  // @ts-ignore
  const { productId } = useParams();

  // fetch all products data
  // @ts-ignore
  const { products } = useContext(StateContext);

  // filter the product with matching id
  // @ts-ignore
  const thisProduct = products.filter((product) => product.id === productId);

  // render JSX
  return (
    // map all information of that specific product
    <section>
      {/* @ts-ignore */}
      {thisProduct.map((product) => {
        return (
          <div key={product.id} className="product-detail">
            <div className="product-detail-image">
              <img src={product.url} alt="product" />
            </div>
            <div className="product-detail-info">
              <h3>{product.title}</h3>
              <h4>${product.price}</h4>
              <p className="lead">{product.description}</p>

              <button
                onClick={() => addToCart(product)}
                className="add-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default ProductDetail;
