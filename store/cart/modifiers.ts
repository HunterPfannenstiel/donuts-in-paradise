import {
  Cart,
  CartSectionDetails,
  ItemGroupDetails,
  NewCartItem,
} from "@_types/cart";
import {
  CartDelegate,
  addNewItem,
  addNewItemAndGroup,
  addNewItemAndSection,
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
  cart: Cart,
  groupDetails?: ItemGroupDetails
) => {
  let clientDelegate: any;
  const cartItemId = checkItemExists(item.id, cart, item.extras);
  if (cartItemId === -2) {
    //Section doesn't exist
    if (groupDetails) {
      clientDelegate = addNewItemAndGroup(item, details, groupDetails);
    } else clientDelegate = addNewItemAndSection(item, details);
  } else if (cartItemId === -1) {
    //Specific item doesn't exist
    clientDelegate = addNewItem(item);
  } else {
    clientDelegate = updateExistingItem(item.id, cartItemId, item.amount);
  }
  dispatch(clientDelegate);
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
