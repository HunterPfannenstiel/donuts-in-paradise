import {
  ReactNode,
  createContext,
  useContext,
  useState,
  FunctionComponent,
} from "react";
import { CartItem } from "../types/cart";

const Cart = createContext<{ items: CartItem[] }>({ items: [] });

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: FunctionComponent<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<{ items: CartItem[] }>({ items: dummyCart });
  return <Cart.Provider value={cart}>{children}</Cart.Provider>;
};

export default CartProvider;

export const useCart = () => useContext(Cart);

const dummyCart: CartItem[] = [
  {
    name: "Apple Cider",
    image:
      "https://res.cloudinary.com/dwg1i9w2u/image/upload/v1673400244/item_images/fgvymicizcsmmwqgbgyh.png",
    amount: 2,
    price: 1,
    extras: [{ name: "12", category: "count", price: 0.8 }],
    extraPrice: 0.8,
  },
];
