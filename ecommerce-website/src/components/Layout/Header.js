import React, { useContext, useState } from "react";
import { Outlet ,Link } from 'react-router-dom';

import Cart from "../cart/cart";
import classes from './Header.module.css';
import CartContext from "../../store/cartContext";

const Header = () => {
    const cartct = useContext(CartContext);
    let cartnum = +(cartct.item.length);
    // console.log(' header', cartct )

    const [show, setCart] = useState(false);

    return (
        <>
        <header className={classes.header}>
            <div className={classes.container}>
                <div>
                <ul className={classes.flex}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Store</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>ContactUS</Link></li>
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
        <Outlet/>
        </>
    );
};

export default Header;