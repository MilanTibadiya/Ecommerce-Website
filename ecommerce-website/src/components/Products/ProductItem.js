import React from "react";

import classes from "./ProductItem.module.css";
const ProductItem = (props) => {

    return (
        <React.Fragment>
        <div className={classes.container}>
            <h2>{props.title}</h2>
            <img src={props.img} alt="product"/>
            <div className={classes.btnParent}>
                <h3>${props.price}</h3>
                <button className={classes.btn}>Add to Cart</button>
            </div>
        </div>
        </React.Fragment>
    );
}

export default ProductItem;