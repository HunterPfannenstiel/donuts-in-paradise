import {
  Cart,
  CartItemExtra,
  CartSection,
  ItemGroupDetails,
  NewCartItem,
} from "@_types/cart";

export const appendNewItem = (
  cart: Cart,
  item: NewCartItem,
  section: CartSection
) => {
  const cartItemId = cart.nextId;
  const extraPrice = calculateExtraPrice(item.extras);
  section.items.push({ ...item, id: cartItemId, extraPrice });
  cart.nextId++;
  const itemPrice = section.price + extraPrice;
  updateCartTotals(cart, item.amount, itemPrice, section);
};

export const updateCartTotals = (
  cart: Cart,
  itemAmount: number,
  itemPrice: number,
  section: CartSection,
  itemIndex?: number
) => {
  if (itemIndex && itemAmount < 1) {
    section.items.splice(itemIndex, 1);
  }
  if (section.groupId) {
    updateGroupDiscount(itemAmount, section.groupId, cart);
  }
  cart.totalItems += itemAmount;
  cart.price = cart.price + itemPrice * itemAmount;
};

export const findSectionByItemId = (itemId: number, cart: Cart) => {
  return cart.sections.find(({ id }) => id === itemId);
};

export const findItemByCartItemId = (
  cartItemId: number,
  section: CartSection
) => {
  const index = section.items.findIndex(({ id }) => id === cartItemId);
  const foundItem = index !== -1 ? section.items[index] : undefined;
  return { index, foundItem };
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
    if (isSameItem(item.extras, extras)) return item.id;
  }
  return -1;
};

export const isSameItem = (
  extrasOne?: CartItemExtra[],
  extrasTwo?: CartItemExtra[]
) => {
  if (extrasOne && extrasTwo) {
    if (extrasOne.length !== extrasTwo.length) return false;
    for (let i = 0; i < extrasTwo.length; i++) {
      //loop through all of the checked item's extras
      const newItemExtra = extrasTwo[i];
      const extra = extrasOne.find((extra) => {
        //see if the current item's extras contains the current extra being checked
        return (
          extra.name === newItemExtra.name &&
          extra.category === newItemExtra.category
        );
      });
      if (!extra) {
        //if the current extra was not found, continue on to the next item
        return false;
      }
    }
    return true;
  } else return extrasOne === extrasTwo;
};

export const updateGroupDiscount = (
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

export const cloneSections = (sections: CartSection[], itemId?: number) => {
  return sections.map((section) => {
    if (itemId) {
      if (section.id === itemId) {
        section.items = section.items.map((item) => ({ ...item }));
      }
      return { ...section };
    } else {
      section.items = section.items.map((item) => ({ ...item }));
      return { ...section };
    }
  });
};

export const cloneGroupDetails = (groupDetails: ItemGroupDetails[]) => {
  return groupDetails.map((groupDetail) => ({ ...groupDetail }));
};
