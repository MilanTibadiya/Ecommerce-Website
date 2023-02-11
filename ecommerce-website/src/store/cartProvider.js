import React, { useState, useEffect } from "react";
import axios from "axios";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const [Item, setCartItems] = useState([]);

  const [token, setToken] = useState(localStorage.getItem("idToken"));
  // const userIsLoggedIn = !!token; //!! is trick of js 2nd ! for val available or nor && 1st ! give boolean for that true/false

  // const [total, setTotal] = useState(0);

// console.log(Item)
    // let addItemToCartHandler = (item) => {
      // let x = Item.find(e => e.id === item.id)
 
      // var newitem;
      // if(x){
      //   newitem = Item.map(e => { 
      //     if(e.id === x.id){
      //       e.quantity++;
      //       e.price+= item.price
      //     }
      //   return e;
      // }
      //     )
      //     setCartItems(newitem);
      // }else {
      //   setCartItems([...Item, {...item, quantity: 1}]);
      // }
    //   // console.log(newitem)
    // };
  
    const removeItemFromCartHandler = async (_id) => {
      // const res = Item.filter((cutElm) => (cutElm.id !== id)); //.map(filterdItem => (setCartItems(filterdItem)))
      // setCartItems(res)
      const res = await axios.delete(`https://crudcrud.com/api/b3f9d16a872b4ddfa611c01bc16046be/cart${localStorage.getItem("userEmail").split("@")[0]}/${_id}`);
    setItems()
    // console.log('delete', res);
    };

    let sum=0;
    Item.forEach((e) => sum+=+(e.price)); 
    // console.log(sum);

    //CrudCrud use;
    // const userEmail = localStorage.getItem('userEmail').split("@")[0];

    const setItems = async () => {
      const res = await axios.get(`https://crudcrud.com/api/b3f9d16a872b4ddfa611c01bc16046be/cart${localStorage.getItem("userEmail").split("@")[0]}`)
      // console.log('CrudCrud',res);
      setCartItems(res.data)
    };

    const addItemToCartHandler = async (item) => {
      
      const res = await axios.post(`https://crudcrud.com/api/b3f9d16a872b4ddfa611c01bc16046be/cart${localStorage.getItem("userEmail").split("@")[0]}`
      ,{...item, quantity:1}
      );
      // console.log(res);
      setItems(localStorage.getItem("userEmail"));     
    }

    useEffect(() => {
      setItems();
    }, [token]);
  
    const cartContext = {
      item: Item,
      // totalNum: item.length,
      totalAmount: sum,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,    
      token: token,
      setToken: setToken,
      setItems: setItems,
      isLoggedIn: !!token,
    };
  
    return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    );
  };
  
  export default CartProvider;