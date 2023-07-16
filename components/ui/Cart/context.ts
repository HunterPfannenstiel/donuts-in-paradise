import { createContext, useContext } from "react";
import { CartItem as CartItemT } from "types/cart";

const CartItem = createContext<CartItemT>({
  name: "",
  amount: 0,
  price: 0,
  image: "",
  extras: undefined,
  extraPrice: undefined,
});

export default CartItem;

export const useCartItem = () => useContext(CartItem);
