import React from "react";

import classes from "./ProductItem.module.css";
const ProductItem = (props) => {

    return (
        <div className={classes.container}>
            <h2>{props.title}</h2>
            <div><img src={props.img}/></div>
            <div className={classes.btnParent}>
                <h3>${props.price}</h3>
                <button className={classes.btn}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductItem;