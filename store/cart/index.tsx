import {
  ReactNode,
  createContext,
  useContext,
  FunctionComponent,
  useReducer,
} from "react";
import { Cart as CartT } from "@_types/cart";
import { CartDelegate, getInitialContext } from "./utils";
import {
  addItemFromItemPage,
  updateItemFromCart,
  deleteCart,
  removeItemFromCart,
} from "./modifiers";

const Cart = createContext(getInitialContext());

interface CartProviderProps {
  children: ReactNode;
}

type CartReducer = (state: CartT, delegate: CartDelegate) => CartT;

const reducer: CartReducer = (state, delegate) => {
  return state;
};

const CartProvider: FunctionComponent<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, dummyCart);

  return (
    <Cart.Provider
      value={{
        cart,
        addItemFromItemPage: addItemFromItemPage.bind(null, dispatch),
        updateItemFromCart: updateItemFromCart.bind(null, dispatch),
        removeItemFromCart: removeItemFromCart.bind(null, dispatch),
        deleteCart: deleteCart.bind(null, dispatch),
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(Cart);

const dummyCart: CartT = {
  sections: [
    {
      id: 1,
      groupId: 1,
      imageUrl:
        "https://res.cloudinary.com/dwg1i9w2u/image/upload/v1673400201/item_images/l7gfyvo8tps7zwdin4wn.png",
      price: 1.1,
      name: "Blueberry",
      items: [{ id: 1, amount: 12 }],
    },
  ],
  totalItems: 12,
  groupingDiscount: 2,
  price: 13.0,
  groupDetails: [{ id: 1, price: 10.5, size: 12, currentItemCount: 12 }],
  nextId: 2,
};
