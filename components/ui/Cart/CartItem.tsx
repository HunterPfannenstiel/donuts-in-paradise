import { ReactNode } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
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
  onPress?: () => void;
}

const CartItem = ({ cartItem, children, style, onPress }: CartItemProps) => {
  return (
    <Context.Provider value={cartItem}>
      <Pressable onPress={onPress}>
        <View style={[styles.container, style]}>{children}</View>
      </Pressable>
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
