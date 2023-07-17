export type CartItemExtra = {
  id: number;
  name: string; //ex: 'Sprinkle Topping'
  price?: number | null;
};

export type NewCartItem = {
  id: number; //menu_item_id
  amount: number;
  extras?: CartItemExtra[];
  extraPrice?: number;
};

export type CartItem = {
  id: number; //cart_item_id
  amount: number;
  extras?: CartItemExtra[];
  extraPrice?: number;
};

export type CartSectionDetails = {
  id: number; //menu_item_id
  name: string;
  price: number;
  imageUrl: string;
  groupId?: number;
};

export type CartSection = {
  items: CartItem[];
} & CartSectionDetails;

export type ItemGroupDetails = {
  id: number;
  size: number;
  price: number;
  currentItemCount: number;
};

export type Cart = {
  sections: CartSection[];
  groupDetails: ItemGroupDetails[];
  price: number;
  groupingDiscount: number;
  totalItems: number;
  nextId: number;
};

export type DisplayCartItem = CartItem & CartSectionDetails;
