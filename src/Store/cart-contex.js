import { createContext } from "react";

const CartContext = createContext({
  item: [],
  amount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
