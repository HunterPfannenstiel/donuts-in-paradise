export type CartItemExtra = {
  name: string;
  category: string;
  price?: number | null;
};

export type CartItem = {
  name: string;
  amount: number;
  price: number;
  image: string;
  extras?: CartItemExtra[];
  extraPrice?: number;
};
