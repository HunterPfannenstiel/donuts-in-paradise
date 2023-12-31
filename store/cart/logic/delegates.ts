import {
  Cart,
  CartSectionDetails,
  ItemGroupDetails,
  NewCartItem,
} from "@_types/cart";
import {
  appendNewItem,
  checkItemExists,
  findItemByCartItemId,
  findSectionByItemId,
  isSameItem,
  updateCartTotals,
  updateGroupDiscount,
} from "./utils";

export type CartDelegate = (cart: Cart) => void;

export const addItem =
  (
    item: NewCartItem,
    details: CartSectionDetails,
    groupDetails?: ItemGroupDetails
  ): CartDelegate =>
  (cart) => {
    const cartItemId = checkItemExists(item.id, cart, item.extras);
    if (cartItemId === -2) {
      //Section doesn't exist
      if (groupDetails) {
        addNewItemAndGroup(item, details, groupDetails, cart);
      } else addNewItemAndSection(item, details, cart);
    } else if (cartItemId === -1) {
      //Specific item doesn't exist
      addNewItem(item, cart);
    } else {
      updateExistingItem(item.id, cartItemId, item.amount)(cart);
    }
  };

const addNewItemAndGroup = (
  item: NewCartItem,
  details: CartSectionDetails,
  groupDetails: ItemGroupDetails,
  cart: Cart
) => {
  cart.groupDetails.push(groupDetails);
  cart.sections.push({ ...details, items: [] });
  appendNewItem(cart, item, cart.sections[cart.sections.length - 1]);
};

const addNewItemAndSection = (
  item: NewCartItem,
  details: CartSectionDetails,
  cart: Cart
) => {
  cart.sections.push({ ...details, items: [] });
  appendNewItem(cart, item, cart.sections[cart.sections.length - 1]);
};

const addNewItem = (item: NewCartItem, cart: Cart) => {
  const section = cart.sections.find(({ id }) => id === item.id);
  if (!section) {
    console.log("Cart section has not been added?");
    return;
  }
  appendNewItem(cart, item, section);
};

export const updateExistingItem =
  (itemId: number, cartItemId: number, amount: number): CartDelegate =>
  (cart) => {
    const section = cart.sections.find(({ id }) => id === itemId);
    if (!section) {
      console.log("Cart section has not been added?");
      return;
    }
    const itemIndex = section.items.findIndex(({ id }) => id === cartItemId);
    if (itemIndex === -1) {
      console.log("Item has not been added?");
      return;
    }

    const item = section.items[itemIndex];
    item.amount += amount;
    const itemPrice = section.price + (item?.extraPrice! || 0);
    updateCartTotals(cart, amount, itemPrice, section, item.amount, itemIndex);
  };

export const removeItem =
  (itemId: number, cartItemId: number): CartDelegate =>
  (cart) => {
    const section = cart.sections.find(({ id }) => id === itemId);
    if (!section) {
      console.log("Cart section has not been added?");
      return;
    }
    const itemIndex = section.items.findIndex(({ id }) => id === cartItemId);
    if (itemIndex === -1) {
      console.log("Item has not been added?");
      return;
    }
    const { extraPrice, amount } = section.items.splice(itemIndex, 1)[0];
    if (section.groupId) {
      updateGroupDiscount(amount, section.groupId, cart);
    }
    cart.price = cart.price - (section.price + (extraPrice || 0)) * amount;
    cart.totalItems -= amount;
  };

export const modifyItem =
  (cartItemId: number, item: NewCartItem): CartDelegate =>
  (cart) => {
    const section = findSectionByItemId(item.id, cart);
    if (!section) {
      console.log("Update Item couldn't find section");
      return;
    }

    const { index, foundItem } = findItemByCartItemId(cartItemId, section);
    if (!foundItem) {
      console.log("Update Item couldn't find item");
      return;
    }
    if (isSameItem(foundItem.extras, item.extras)) {
      //adjust current item amount and cart totals
      const adjustAmount = item.amount - foundItem.amount;
      foundItem.amount += adjustAmount;
      const itemPrice = section.price + (foundItem.extraPrice || 0);
      updateCartTotals(
        cart,
        adjustAmount,
        itemPrice,
        section,
        foundItem.amount,
        index
      );
    } else {
      const exisitingCartId = checkItemExists(item.id, cart, item.extras);
      if (exisitingCartId > -1) {
        //update an exisiting item with the cart item id of 'exisitingCartId' with 'amount'
        updateExistingItem(item.id, exisitingCartId, item.amount)(cart);
      } else {
        //add new item
        appendNewItem(cart, item, section);
      }
      //delete the item with 'cartItemId'
      const { amount } = foundItem;
      foundItem.amount = 0;
      const foundItemPrice = section.price + (foundItem.extraPrice || 0);
      updateCartTotals(cart, -amount, foundItemPrice, section, 0, index);
    }
  };

export const clearCart = (): CartDelegate => (cart) => {
  cart.sections = [];
  cart.groupDetails = [];
  cart.price = 0;
  cart.groupingDiscount = 0;
  cart.totalItems = 0;
  cart.nextId = 0;
};

export const getEmptyCart = (): Cart => {
  return {
    sections: [],
    groupDetails: [],
    price: 0,
    groupingDiscount: 0,
    totalItems: 0,
    nextId: 0,
  };
};
