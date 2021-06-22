import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

// context
const StateContext = React.createContext();

const StateProvider = ({ children }) => {
  // set context for products, cartItems, total, totalItems, and favoriteItems
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [favoriteItems, setFavoriteItems] = useState([]);
  // https://api.unsplash.com/search/photos?query=flower&client_id=process.env.ACCESS_KEY

  // fetching product data
  const url =
    "https://raw.githubusercontent.com/jaamaal95/anabia/master/assets/react-shop-data/data.json";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json()) // get json data from api
      .then((data) => setProducts(data)); // save data to `state`
  }, []);

  // calculate cart quantity
  const calcQuantity = () => {
    const totalQty = cartItems.reduce(
      (total, product) => total + product.quantity,
      0
    );
    setTotalItems(totalQty);
  };

  // addToCart button functionality
  const addToCart = (product) => {
    // check if the newly added product is already in cart by getting it's index
    const index = cartItems.findIndex((item) => item.id === product.id);
    // if index not found push it to cart & set quantity to 1 else update the quantity only
    if (index === -1) {
      cartItems.push({ ...product, quantity: 1 });
    } else {
      cartItems[index].quantity += 1;
    }
    // update cart quantity
    calcQuantity();
  };

  // removeFromCart button functionality
  const removeFromCart = (product) => {
    // remove product from cart
    cartItems.pop(product);
    // update cart quantity
    calcQuantity();
  };

  // counter increase button functionality
  const increaseCount = (id) => {
    // check if the newly added product is already in cart by getting it's index
    const index = cartItems.findIndex((item) => item.id === id);
    // increase the quantity by 1
    cartItems[index].quantity += 1;
    // update cart quantity
    calcQuantity();
  };

  // counter decrease button functionality
  const decreaseCount = (id) => {
    // check if the newly added product is already in cart by getting it's index
    const index = cartItems.findIndex((item) => item.id === id);
    // decrease the quantity by 1
    cartItems[index].quantity -= 1;
    // update cart quantity
    calcQuantity();
  };

  // addToFavorite button functionality
  const addToFavorite = (newItem) => {
    setFavoriteItems((prevItems) => [...prevItems, newItem]);
  };

  // removeFromFavorite button functionality
  const removeFromFavorite = (id) => {
    setFavoriteItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const resetCart = () => {
    setCartItems([]);
    setTotalItems(0);
  };

  const checkOutCart = () => {
    resetCart();
    Swal.fire("Congrats!", "You have successfully placed an order!", "success");
  };

  useEffect(() => {
    // calculate total bill
    const totalPrices = cartItems
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
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
};

export { StateContext, StateProvider };
