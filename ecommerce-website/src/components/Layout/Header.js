import React, { useState } from "react";

import Cart from "../cart/cart";
import classes from './Header.module.css';

const Header = () => {
    const [show, setCart] = useState(true);

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
                <div>
                <button onClick={()=> setCart(!show)} className={classes.cart}>Cart</button>
                </div>
            </div>
           { show ? <div className={classes.toggle}>
                <Cart/>
            </div> : null}
        </header>
    );
};

export default Header;