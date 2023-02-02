import React from "react";

import classes from './Header.module.css';

const Header = () => {
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
                <a className={classes.cart} href="#">Cart</a>
                </div>
            </div>
        </header>
    );
};

export default Header;