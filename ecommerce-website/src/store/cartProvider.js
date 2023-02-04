import React from "react";

import CartContext from "./cartContext";

const CartProvider = (props) => {

    const addItemToCartHandler = (item) => {};
  
    const removeItemFromCartHandler = (id) => {};
  
    const cartContext = {
      item: [],
      // totalNum: item.length,
      totalAmount: 0,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,    };
  
    return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    );
  };
  
  export default CartProvider;