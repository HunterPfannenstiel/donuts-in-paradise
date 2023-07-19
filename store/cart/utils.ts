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
    groupDetails?: ItemGroupDetails
  ) => void;
  updateItemFromCart: (
    itemId: number,
    cartItemId: number,
    amount: number
  ) => void;
  removeItemFromCart: (itemId: number, cartItemId: number) => void;
  modifyItemFromCheckout: (cartItemId: number, item: NewCartItem) => void;
  deleteCart: (dispatch: React.Dispatch<CartDelegate>) => void;
};

export const getInitialContext = (): CartContext => {
  const fn = () => {};
  return {
    cart: getEmptyCart(),
    addItemFromItemPage: fn,
    updateItemFromCart: fn,
    removeItemFromCart: fn,
    modifyItemFromCheckout: fn,
    deleteCart: fn,
  };
};
