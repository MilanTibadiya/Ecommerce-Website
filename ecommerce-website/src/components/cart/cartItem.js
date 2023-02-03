
import classes from "./cartItem.module.css";

const CartItem = (props) => {
    return (
        <li className={classes.list}>
            <div className={classes.itemcontainer}>

                <div className={classes.item}>
                <h4>{props.title}</h4>
                <img src={props.img}/>
                </div>

                <div className={classes.price}>
                    <p>Price: ${props.price}</p>
                </div>

                <div className={classes.qty}>
                    <span>Quantity: {props.quantity}</span>
                    <button>Remove</button>
                </div>
            </div>
        </li>
    );
}

export default CartItem;