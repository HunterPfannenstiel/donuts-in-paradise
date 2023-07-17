import { FunctionComponent } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { useCartItem } from "./context";
import { Styles } from "@constants/styles";

interface CartItemPriceProps {
  style?: StyleProp<TextStyle>;
}

const CartItemPrice: FunctionComponent<CartItemPriceProps> = ({ style }) => {
  const { price, extraPrice } = useCartItem();
  const displayPrice = extraPrice
    ? (price + extraPrice).toFixed(2)
    : price.toFixed(2);
  const fontWeight = extraPrice ? "bold" : "normal";
  return (
    <Text style={[styles.text, style, { fontWeight }]}>${displayPrice}</Text>
  );
};

export default CartItemPrice;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Styles.Fonts.normal,
  },
});
