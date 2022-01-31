import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductDetail from "./components/Product/ProductDetail";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Store from "./pages/Store";
import Wishlist from "./pages/Wishlist";
import "./style.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* @ts-ignore */}
        <Route index path="/" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
