import React, { useContext } from "react";

import classes from "./cart.module.css"
import CartItem from "./cartItem";
import CartContext from "../../store/cartContext";

// const cartElements = [
//     {
//         id:'1',
//     title: 'Colors',
//     price: 100,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//     quantity: 2,
//     },
//     {
//         id:'2',
//     title: 'Black and white Colors',
//     price: 50,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//     quantity: 3,
//     },
//     {
//     id: '3',
//     title: 'Yellow and Black Colors',
//     price: 70,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//     quantity: 1,
//     }
//     ]
const Cart = () => {

    const cartctx = useContext(CartContext);
    

    const cartElement = <ul className={classes.ullist}>
        { cartctx.item.map((item) => 
       <CartItem 
       key={item.id}
          title={item.title}
          price={item.price}
          img={item.imageUrl}
          quantity={item.quantity}
       />)}
       </ul> 
    //    console.log(cartctx + "    abcd")
    return (
        <React.Fragment>
            {cartElement}
        </React.Fragment>
    );
};

export default Cart;