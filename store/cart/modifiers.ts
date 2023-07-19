import {
  Cart,
  CartSectionDetails,
  ItemGroupDetails,
  NewCartItem,
} from "@_types/cart";
import {
  CartDelegate,
  addItem,
  clearCart,
  modifyItem,
  removeItem,
  updateExistingItem,
} from "./logic/delegates";
import { checkItemExists } from "./logic/utils";

export const addItemFromItemPage = (
  dispatch: React.Dispatch<CartDelegate>,
  item: NewCartItem,
  details: CartSectionDetails,
  groupDetails?: ItemGroupDetails
) => {
  dispatch(addItem(item, details, groupDetails));
};

export const updateItemFromCart = (
  dispatch: React.Dispatch<CartDelegate>,
  itemId: number,
  cartItemId: number,
  amount: number
) => {
  dispatch(updateExistingItem(itemId, cartItemId, amount));
};

export const updateItemFromCheckout = (
  dispatch: React.Dispatch<CartDelegate>,
  cartItemId: number,
  item: NewCartItem
) => {
  dispatch(modifyItem(cartItemId, item));
};

export const removeItemFromCart = (
  dispatch: React.Dispatch<CartDelegate>,
  itemId: number,
  cartItemId: number
) => {
  dispatch(removeItem(itemId, cartItemId));
};

export const deleteCart = (dispatch: React.Dispatch<CartDelegate>) => {
  dispatch(clearCart());
};
