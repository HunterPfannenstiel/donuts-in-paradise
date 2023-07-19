import {
  ReactNode,
  createContext,
  useContext,
  FunctionComponent,
  useReducer,
} from "react";
import { Cart as CartT } from "@_types/cart";
import {
  addItemFromItemPage,
  updateItemFromCart,
  deleteCart,
  removeItemFromCart,
  updateItemFromCheckout,
} from "./modifiers";
import { getInitialContext } from "./utils";
import { CartDelegate, getEmptyCart } from "./logic/delegates";

const Cart = createContext(getInitialContext());

interface CartProviderProps {
  children: ReactNode;
}

type CartReducer = (state: CartT, delegate: CartDelegate) => CartT;

const reducer: CartReducer = (state, delegate) => {
  const cloneCart = {
    ...state,
    sections: state.sections.map((section) => {
      return { ...section, items: section.items.map((item) => ({ ...item })) };
    }),
    groupDetails: state.groupDetails.map((details) => ({ ...details })),
  };
  delegate(cloneCart);
  return cloneCart;
};

const CartProvider: FunctionComponent<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, getEmptyCart());

  const findByCartItemId = (itemId: number, cartItemId: number) => {
    const { items } = cart.sections.find((section) => section.id === itemId)!;
    return items.find((item) => item.id === cartItemId)!;
  };

  return (
    <Cart.Provider
      value={{
        cart,
        addItemFromItemPage: addItemFromItemPage.bind(null, dispatch),
        updateItemFromCart: updateItemFromCart.bind(null, dispatch),
        removeItemFromCart: removeItemFromCart.bind(null, dispatch),
        modifyItemFromCheckout: updateItemFromCheckout.bind(null, dispatch),
        deleteCart: deleteCart.bind(null, dispatch),
        findByCartItemId,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(Cart);
