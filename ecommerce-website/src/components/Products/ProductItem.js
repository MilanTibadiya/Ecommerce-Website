import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CartContext from "../../store/cartContext";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
    
    const cartctx = useContext(CartContext);
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        cartctx.addItem(props);
        // cartctx.item.push(props);
        // console.log("in cartCtX", cartctx)
    };

    // const imageHandlet = (e) => {
    //     e.preventDefault();
    //     console.log('img', props.id);
    //     // <NavLink to='/products/product1'>{props.img}</NavLink>
    // }
 
    return (
        <React.Fragment>
        <div className={classes.container}>
            <h2>{props.title}</h2>
            <img onClick={()=> navigate(`/products/${props.id}`)} className={classes.img} src={props.img} alt="product"/>
            <div className={classes.btnParent}>
                <h3>${props.price}</h3>
                <buton onClick={(e) => submitHandler(e)} className={classes.btn}>Add to Cart</buton>
            </div>
        </div>
        </React.Fragment>
    );
}

export default ProductItem;