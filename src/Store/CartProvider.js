import { useReducer } from "react";
import CartContext from "./cart-contex";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const totalAmountHandler = (items) => {
  const total = items.reduce((acc, curr) => acc + curr.amount * +curr.price, 0);

  return total;
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.name === action.item.name
    );

    if (existingItemIndex !== -1) {
      state.items[existingItemIndex].amount += 1;
      const updatedAmount = totalAmountHandler(state.items);
      return {
        items: state.items,
        totalAmount: updatedAmount,
      };
    }

    const updatedItems = [...state.items, action.item];
    const updatedAmount = totalAmountHandler(updatedItems);
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.name === action.item.name
    );
    state.items[existingItemIndex].amount -= 1;
    const updatedAmount = totalAmountHandler(state.items);

    if (state.items[existingItemIndex].amount === 0) {
      console.log(action);
      const newState = state.items.filter((it) => it.id !== action.item.id);
      return {
        items: newState,
        totalAmount: updatedAmount,
      };
    }

    return {
      items: state.items,
      totalAmount: updatedAmount,
    };
  }

  return defaultState;
};

const CartProvider = function (props) {
  const [cartState, dispatchCartFuction] = useReducer(
    cartReducer,
    defaultState
  );

  const addItemHandler = (item) => {
    dispatchCartFuction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemHandler = (item) => {
    dispatchCartFuction({ type: "REMOVE", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
