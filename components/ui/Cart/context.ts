import { createContext, useContext } from "react";
import { DisplayCartItem } from "types/cart";

const CartItem = createContext<DisplayCartItem>({
  id: 0,
  name: "",
  amount: 0,
  price: 0,
  imageUrl: "",
  extras: undefined,
  extraPrice: undefined,
});

export default CartItem;

export const useCartItem = () => useContext(CartItem);
