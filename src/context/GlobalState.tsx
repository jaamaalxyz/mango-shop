import React, { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

// creating `context`
// @ts-ignore
const StateContext = createContext();

// @ts-ignore
function StateProvider({ children }) {
  // defining `state` for our product data
  const [products, setProducts] = useState([]);
  // defining `state` for our cart data
  const [cartItems, setCartItems] = useState([]);
  // defining `state` for calculating total amount
  const [total, setTotal] = useState(0);
  // defining `state` for counting total items in
  const [totalItems, setTotalItems] = useState(0);
  // defining `state` for favorite product data
  const [favoriteItems, setFavoriteItems] = useState([]);

  // fetching product data
  const url =
    "https://raw.githubusercontent.com/jaamaal95/anabia/master/assets/react-shop-data/data.json";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json()) // get json data from api
      .then((data) => setProducts(data)); // save data to `state`
  }, []);

  // calculate cart quantity
  function calcQuantity() {
    const totalQty: number = cartItems.reduce(
      // @ts-ignore
      (total, product) => total + product.quantity,
      0
    );
    setTotalItems(totalQty);
  }

  // addToCart button functionality
  // @ts-ignore
  function addToCart(product) {
    // check if the newly added product is already in cart by getting it's index
    // @ts-ignore
    const index = cartItems.findIndex((item) => item.id === product.id);
    // if index not found push it to cart & set quantity to 1 else update the quantity only
    if (index === -1) {
      // @ts-ignore
      cartItems.push({ ...product, quantity: 1 });
    } else {
      // @ts-ignore
      cartItems[index].quantity += 1;
    }
    // update cart quantity
    calcQuantity();
  }

  // removeFromCart button functionality
  // @ts-ignore
  function removeFromCart(product) {
    // remove product from cart
    // @ts-ignore
    cartItems.pop(product);
    // update cart quantity
    calcQuantity();
  }

  // counter increase button functionality
  function increaseCount(id: number) {
    // check if the newly added product is already in cart by getting it's index
    // @ts-ignore
    const index = cartItems.findIndex((item) => item.id === id);
    // increase the quantity by 1
    // @ts-ignore
    cartItems[index].quantity += 1;
    // update cart quantity
    calcQuantity();
  }

  // counter decrease button functionality
  // @ts-ignore
  function decreaseCount(id) {
    // check if the newly added product is already in cart by getting it's index
    // @ts-ignore
    const index = cartItems.findIndex((item) => item.id === id);
    // decrease the quantity by 1
    // @ts-ignore
    cartItems[index].quantity -= 1;
    // update cart quantity
    calcQuantity();
  }

  // addToFavorite button functionality
  // @ts-ignore
  function addToFavorite(newItem) {
    // @ts-ignore
    setFavoriteItems((prevItems) => [...prevItems, newItem]);
  }

  // removeFromFavorite button functionality
  function removeFromFavorite(id: number) {
    // @ts-ignore
    setFavoriteItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function resetCart() {
    setCartItems([]);
    setTotalItems(0);
  }

  function checkOutCart() {
    resetCart();
    Swal.fire("Congrats!", "You have successfully placed an order!", "success");
  }

  useEffect(() => {
    // calculate total bill

    const totalPrices = cartItems
      // @ts-ignore
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
    // @ts-ignore
    setTotal(totalPrices);
  }, [totalItems, cartItems]);

  return (
    <StateContext.Provider
      value={{
        products,
        total,
        totalItems,
        cartItems,
        addToCart,
        removeFromCart,
        favoriteItems,
        addToFavorite,
        removeFromFavorite,
        increaseCount,
        decreaseCount,
        resetCart,
        checkOutCart,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export { StateContext, StateProvider };
