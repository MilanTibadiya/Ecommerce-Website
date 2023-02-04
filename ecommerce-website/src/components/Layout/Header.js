import React, { useContext, useState } from "react";

import Cart from "../cart/cart";
import classes from './Header.module.css';
import CartContext from "../../store/cartContext";

const Header = () => {
    const cartct = useContext(CartContext);
    let cartnum = +(cartct.item.length);
    console.log(cartnum)

    const [show, setCart] = useState(false);

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div>
                <ul className={classes.flex}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Store</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                </div>
                <div className={classes.cartsection}>
                    <span className={classes.cartqty}> {cartnum}</span>
                <button onClick={() => setCart(!show)} className={classes.cart}>Cart</button>
                </div>
            </div>
           { show ? <div className={classes.toggle}>
                <Cart/>
            </div> : null}
        </header>
    );
};

export default Header;