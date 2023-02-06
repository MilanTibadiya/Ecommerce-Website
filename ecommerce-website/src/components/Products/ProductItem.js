import React, { useContext } from "react";

import CartContext from "../../store/cartContext";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
    const cartctx = useContext(CartContext);
    
    
    const submitHandler = (event) => {
        event.preventDefault();
        cartctx.addItem(props);
        // cartctx.item.push(props);
        // console.log("in cartCtX", cartctx)
    };

    return (
        <React.Fragment>
        <div className={classes.container}>
            <h2>{props.title}</h2>
            <img className={classes.img} src={props.img} alt="product"/>
            <div className={classes.btnParent}>
                <h3>${props.price}</h3>
                <buton onClick={(e) => submitHandler(e)} className={classes.btn}>Add to Cart</buton>
            </div>
        </div>
        </React.Fragment>
    );
}

export default ProductItem;