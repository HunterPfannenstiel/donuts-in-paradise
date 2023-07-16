import { FunctionComponent } from "react";
import { StyleSheet, Text } from "react-native";
import { useCartItem } from "./context";
import { Styles } from "../../../constants/styles";

interface CartItemPriceProps {}

const CartItemPrice: FunctionComponent<CartItemPriceProps> = () => {
  const { price, extraPrice } = useCartItem();
  const displayPrice = extraPrice
    ? (price + extraPrice).toFixed(2)
    : price.toFixed(2);
  const fontWeight = extraPrice ? "bold" : "normal";
  return <Text style={[styles.text, { fontWeight }]}>${displayPrice}</Text>;
};

export default CartItemPrice;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Styles.Fonts.normal,
  },
});
