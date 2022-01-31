import React from "react";
import { Route, Switch } from "react-router-dom";
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

      <Switch>
        <Route exact path="/">
          <Store />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/wishlist">
          <Wishlist />
        </Route>

        <Route path="/product/:productId">
          <ProductDetail />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
