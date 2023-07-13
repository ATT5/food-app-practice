import { useContext } from "react";
import classes from "./CartItems.module.css";
import CartContext from "../../Store/cart-contex";

const CartItems = function (props) {
  const CartCtx = useContext(CartContext);

  const add = () => {
    CartCtx.addItem(CartCtx.items[props.index]);
  };

  const remove = () => CartCtx.removeItem(CartCtx.items[props.index]);

  return (
    <div className={classes.items}>
      <span className={classes.info}>
        <h3>{props.name}</h3>
        <p className={classes.price}>${props.price}</p>
        <p className={classes.amount}>x{props.amo}</p>
      </span>
      <span className={classes["btn-container"]}>
        <button className={`${classes.btn} 1`} onClick={add}>
          +
        </button>
        <button className={classes.btn} onClick={remove}>
          -
        </button>
      </span>
    </div>
  );
};

export default CartItems;
