import React from "react";

import classes from "./cart.module.css"
import CartItem from "./cartItem";

const cartElements = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
    },
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
    },
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
    }
    ]
const Cart = () => {

    const cartElement = <ul className={classes.ullist}>
        { cartElements.map((item) => 
       <CartItem
    //    key={item.id}
          title={item.title}
          price={item.price}
          img={item.imageUrl}
          quantity={item.quantity}
       />)}
       </ul> 
    return (
        <React.Fragment>
            {cartElement}
        </React.Fragment>
    );
};

export default Cart;