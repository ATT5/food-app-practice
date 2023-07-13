import CartContext from "../../Store/cart-contex";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";
import { useContext } from "react";

const Cart = function (props) {
  const CartCtx = useContext(CartContext);
  const hasItems = CartCtx.items.length > 0;
  const total = CartCtx.totalAmount.toFixed(2);

  const cartItems = CartCtx.items.map((item, index) => (
    <CartItems
      key={item.key}
      name={item.name}
      price={item.price}
      amo={item.amount}
      index={index}
    />
  ));

  return (
    <Modal onClick={props.onHideCart}>
      <div className={classes.cart}>
        <span className={classes.total}>Total Amount</span>
        <span className={classes.amount}>${total}</span>
      </div>
      <div className={classes["items-box"]}>{hasItems && cartItems}</div>
      <div className={classes["btn-container"]}>
        <button onClick={props.onHideCart} className={classes.close}>
          Close
        </button>
        {hasItems && <button className={classes.order}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
