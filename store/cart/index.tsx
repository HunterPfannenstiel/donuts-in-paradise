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
  return delegate({ ...state });
};

const CartProvider: FunctionComponent<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, getEmptyCart());

  return (
    <Cart.Provider
      value={{
        cart,
        addItemFromItemPage: addItemFromItemPage.bind(null, dispatch),
        updateItemFromCart: updateItemFromCart.bind(null, dispatch),
        removeItemFromCart: removeItemFromCart.bind(null, dispatch),
        modifyItemFromCheckout: updateItemFromCheckout.bind(null, dispatch),
        deleteCart: deleteCart.bind(null, dispatch),
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(Cart);
