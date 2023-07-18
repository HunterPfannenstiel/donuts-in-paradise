import {
  Cart,
  CartItemExtra,
  CartSectionDetails,
  ItemGroupDetails,
  NewCartItem,
} from "@_types/cart";

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
  deleteCart: (dispatch: React.Dispatch<CartDelegate>) => void;
};

export const getInitialContext = (): CartContext => {
  const fn = () => {};
  return {
    cart: getEmptyCart(),
    addItemFromItemPage: fn,
    updateItemFromCart: fn,
    removeItemFromCart: fn,
    deleteCart: fn,
  };
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

export type CartDelegate = (cart: Cart) => void;

export const addNewItemAndGroup =
  (
    item: NewCartItem,
    details: CartSectionDetails,
    groupDetails: ItemGroupDetails
  ): CartDelegate =>
  (cart) => {
    cart.groupDetails.push(groupDetails);
    addNewItemAndSection(item, details)(cart);
  };

export const addNewItemAndSection =
  (item: NewCartItem, details: CartSectionDetails): CartDelegate =>
  (cart) => {
    cart.sections.push({ ...details, items: [] });
    addNewItem(item)(cart);
  };

export const addNewItem =
  (item: NewCartItem): CartDelegate =>
  (cart) => {
    const section = cart.sections.find(({ id }) => id === item.id);
    if (!section) {
      console.log("Cart section has not been added?");
      return;
    }
    const cartItemId = cart.nextId;
    const extraPrice = calculateExtraPrice(item.extras);
    section.items.push({ ...item, id: cartItemId, extraPrice });
    cart.nextId++;
    if (section.groupId) {
      updateGroupDiscount(item.amount, section.groupId, cart);
    }
    cart.price = cart.price + (section.price + extraPrice) * item.amount;
    cart.totalItems += item.amount;
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
    if (item.amount < 1) {
      section.items.splice(itemIndex, 1);
    }
    if (section.groupId) {
      updateGroupDiscount(amount, section.groupId, cart);
    }
    cart.totalItems += amount;
    cart.price = cart.price + itemPrice * amount;
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

export const clearCart = (): CartDelegate => (cart) => {
  cart = getEmptyCart();
};

export const checkItemExists = (
  itemId: number,
  cart: Cart,
  extras?: CartItemExtra[]
) => {
  const section = cart.sections.find((section) => section.id === itemId);
  if (!section) return -2;
  const { items } = section;
  for (let i = 0; i < items.length; i++) {
    //loop through all items in the section
    const item = items[i];
    if (item.extras) {
      //if the current item has extras continue...
      let found = true;
      if (extras && item.extras.length === extras.length) {
        //if the item being checked has extras and it has the same length as the current item's extras, continue...
        for (let i = 0; i < extras.length; i++) {
          //loop through all of the checked item's extras
          const newItemExtra = extras[i];
          const index = item.extras.findIndex((extra) => {
            //see if the current item's extras contains the current extra being checked
            return (
              extra.name === newItemExtra.name &&
              extra.category === newItemExtra.category
            );
          });
          if (index === -1) {
            //if the current extra was not found, continue on to the next item
            found = false;
            break;
          }
        }
      }
      if (found) return item.id;
    } else if (!extras) return item.id;
  }
  return -1;
};

const updateGroupDiscount = (
  itemAmount: number,
  groupId: number,
  cart: Cart
) => {
  const groupDetails = cart.groupDetails.find(
    (detail) => detail.id === groupId
  );
  if (!groupDetails) {
    console.log("No group details?", groupId);
    return;
  }
  const prevDiscount = calculateGroupDiscount(
    groupDetails.size,
    groupDetails.price,
    groupDetails.currentItemCount
  );
  groupDetails.currentItemCount += itemAmount;
  const currDiscount = calculateGroupDiscount(
    groupDetails.size,
    groupDetails.price,
    groupDetails.currentItemCount
  );
  cart.groupingDiscount += currDiscount - prevDiscount;
};

const calculateGroupDiscount = (
  size: number,
  price: number,
  totalItems: number
) => {
  const unitPrice = size / price;
  const totalGroups = Math.floor(totalItems / size);
  const regularPrice = unitPrice * totalItems;
  const groupingPrice = totalGroups * price;
  return regularPrice - groupingPrice;
};

const calculateExtraPrice = (extras?: CartItemExtra[]) => {
  let itemPrice = 0;
  if (extras) {
    extras.forEach((extra) => {
      itemPrice += extra.price || 0;
    });
  }
  return itemPrice;
};

export const extraToString = (category: string, extra: string) => {
  if (extra === "None") return undefined;
  return extra + " " + category;
};
