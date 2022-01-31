import React, { useContext } from "react";
import { StateContext } from "../../context/GlobalState";
import "./product.css";
import ProductItem from "./ProductItem";

function ProductGrid() {
  // @ts-ignore
  const { products } = useContext(StateContext);

  return (
    <section className="products">
      {/* @ts-ignore */}
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductGrid;
