import { useContext } from "react";

import classes from "./cartItem.module.css";
import CartContext from "../../store/cartContext";

const CartItem = (props) => {
    const ctx = useContext(CartContext);

   const  removeCartItem = (_id) => { 
        // console.log("remove cart item", _id)
        ctx.removeItem(_id);
    }

    return (
        <li className={classes.list}>
            <div className={classes.itemcontainer}>

                <div className={classes.item}>
                <h4>{props.title}</h4>
                <img src={props.img} alt="product img"/>
                </div>

                <div className={classes.price}>
                    <p>Price: ${props.price}</p>
                </div>

                <div className={classes.qty}>
                    <span>Quantity: {props.quantity}</span>
                    <button onClick={() => removeCartItem(props.id)}>Remove</button>
                </div>
            </div>
        </li>
    );
}

export default CartItem;