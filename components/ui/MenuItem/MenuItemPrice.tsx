import { FunctionComponent } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { useItem } from "./context";
import { Styles } from "@constants/styles";

interface MenuItemPriceProps {
  style?: StyleProp<TextStyle>;
}

const MenuItemPrice: FunctionComponent<MenuItemPriceProps> = ({ style }) => {
  const { price } = useItem();
  return <Text style={[styles.text, style]}>${price}</Text>;
};

export default MenuItemPrice;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: 8,
    fontFamily: Styles.Fonts.normal,
  },
});
