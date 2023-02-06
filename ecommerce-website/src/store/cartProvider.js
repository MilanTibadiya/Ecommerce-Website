import React, { useState } from "react";

import CartContext from "./cartContext";

const CartProvider = (props) => {
  const [Item, setCartItems] = useState([]);

    const addItemToCartHandler = (item) => {
      setCartItems([...Item, {...item, quantity: 1}]);
      // console.log(' in provider ',item);
    };
  
    const removeItemFromCartHandler = (id) => {
      const res = Item.filter((cutElm) => (cutElm.id !== id)); //.map(filterdItem => (setCartItems(filterdItem)))
      setCartItems(res)
    };
  
    const cartContext = {
      item: Item,
      // totalNum: item.length,
      totalAmount: 0,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,    
    };
  
    return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    );
  };
  
  export default CartProvider;

  
  // const [show, setShow] = useState(false);

  // const addItem = (item) => setCartItems(item);