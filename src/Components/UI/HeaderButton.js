import { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";
import CartContext from "../../Store/cart-contex";

const HeaderButton = function (props) {
  const cartCtx = useContext(CartContext);
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  const btnClasses = `${classes.Button} ${btnHighlighted ? classes.bump : ""}`;

  const cartItems = cartCtx.items.reduce((acc, curr) => acc + curr.amount, 0);

  useEffect(() => {
    if (cartItems === 0) return;
    setBtnHighlighted(true);

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.txt}>Your Cart</span>
      <span className={classes["num-items"]}>{cartItems}</span>
    </button>
  );
};

export default HeaderButton;
