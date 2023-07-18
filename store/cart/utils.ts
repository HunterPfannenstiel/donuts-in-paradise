import {
  Cart,
  CartSectionDetails,
  ItemGroupDetails,
  NewCartItem,
} from "@_types/cart";
import { CartDelegate, getEmptyCart } from "./logic/delegates";

export type CartContext = {
  cart: Cart;
  addItemFromItemPage: (
    item: NewCartItem,
    details: CartSectionDetails,
    cart: Cart,
    groupDetails?: ItemGroupDetails
  ) => void;
  updateItemFromCart: (
    itemId: number,
    cartItemId: number,
    amount: number
  ) => void;
  removeItemFromCart: (itemId: number, cartItemId: number) => void;
  updateItemFromCheckout: (cartItemId: number, item: NewCartItem) => void;
  deleteCart: (dispatch: React.Dispatch<CartDelegate>) => void;
};

export const getInitialContext = (): CartContext => {
  const fn = () => {};
  return {
    cart: getEmptyCart(),
    addItemFromItemPage: fn,
    updateItemFromCart: fn,
    removeItemFromCart: fn,
    updateItemFromCheckout: fn,
    deleteCart: fn,
  };
};
