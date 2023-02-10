import React, { useState } from "react";

import CartContext from "./cartContext";

const CartProvider = (props) => {
  const [Item, setCartItems] = useState([]);
  // const [total, setTotal] = useState(0);

console.log(Item)
    const addItemToCartHandler = (item) => {
      let x = Item.find(e => e.id === item.id)
 
      var newitem;
      if(x){
        newitem = Item.map(e => { 
          if(e.id === x.id){
            e.quantity++;
            e.price+= item.price
          }
        return e;
      }
          )
          setCartItems(newitem);
      }else {
        setCartItems([...Item, {...item, quantity: 1}]);
      }
      // console.log(newitem)
    };
  
    const removeItemFromCartHandler = (id) => {
      const res = Item.filter((cutElm) => (cutElm.id !== id)); //.map(filterdItem => (setCartItems(filterdItem)))
      setCartItems(res)
    };
    let sum=0;
    Item.forEach((e) => sum+=+(e.price)); 
    // console.log(sum);
  
    const cartContext = {
      item: Item,
      // totalNum: item.length,
      totalAmount: sum,
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