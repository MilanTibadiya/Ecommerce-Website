import React, { useContext, useState } from "react";
import { Outlet , NavLink, useNavigate } from 'react-router-dom';

import Cart from "../cart/cart";
import classes from './Header.module.css';
import CartContext from "../../store/cartContext";

const Header = () => {
    const cartct = useContext(CartContext);
    let cartnum = +(cartct.item.length);
    // console.log(' header', cartct )
    const isLoggedIn = cartct.isLoggedIn;

    const navigate= useNavigate()

    const [show, setCart] = useState(false);

    return (
        <>
        <header className={classes.header}>
            <div className={classes.container}>
                <div>
                <ul className={classes.flex}>
                    <li><NavLink to="/">Home</NavLink></li>
                  {isLoggedIn && <li><NavLink to="/products">Store</NavLink></li>}
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact Us</NavLink></li>
                    {/* <li><NavLink to='/login'>Login</NavLink></li> */}
                    <li> 
                    {/* !cartct.token */}
                       {!isLoggedIn ? <NavLink to="/login" id="link"> Login </NavLink>
                                : <NavLink onClick={() => {  
                                    localStorage.removeItem('idToken')
                                    localStorage.removeItem("userEmail")
                                    navigate('/login')
                                    cartct.setCartItems([])
                                    cartct.setToken(null)
                                }
                            }>Logout</NavLink> 
                        }        
                    </li>
                </ul>
                </div>
                <div className={classes.cartsection}>
                    <span className={classes.cartqty}> {cartnum}</span>
                <button onClick={() => setCart(!show)} className={classes.cart}>Cart</button>
                </div>
            </div>
           { isLoggedIn && (show ? <div className={classes.toggle}>
                <Cart/>
            </div> : null)}
        </header>
        <Outlet/>
        </>
    );
};

export default Header;