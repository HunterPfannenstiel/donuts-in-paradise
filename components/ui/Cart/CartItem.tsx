import { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { DisplayCartItem } from "../../../types/cart";
import Context from "./context";
import CartItemExtraList from "./Extras/CartItemExtraList";
import CartItemDetails from "./CartItemDetails";
import CartItemPrice from "./CartItemPrice";
import CartItemImage from "./CartItemImage";

interface CartItemProps {
  cartItem: DisplayCartItem;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const CartItem = ({ cartItem, children, style }: CartItemProps) => {
  return (
    <Context.Provider value={cartItem}>
      <View style={[styles.container, style]}>{children}</View>
    </Context.Provider>
  );
};

CartItem.Image = CartItemImage;
CartItem.Details = CartItemDetails;
CartItem.Extras = CartItemExtraList;
CartItem.Price = CartItemPrice;

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
});
