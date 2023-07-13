import { useContext } from "react";
import classes from "./MealItems.module.css";
import CartContext from "../../Store/cart-contex";

const MealItems = function (props) {
  const cartCtx = useContext(CartContext);

  const add = () => {
    cartCtx.addItem({
      amount: 1,
      key: props.id,
      id: props.id,
      name: props.name,
      price: props.price,
    });
  };

  return (
    <div className={classes["meal-list"]}>
      <li id={props.id}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p className={classes.price}>${props.price}</p>
      </li>
      <div className={classes.inputs}>
        <button className={classes["btn-add"]} onClick={add}>
          + Add
        </button>
      </div>
    </div>
  );
};

export default MealItems;
