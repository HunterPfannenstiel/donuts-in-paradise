import { FunctionComponent } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { useItem } from "./context";

interface MenuItemNameProps {
  style?: StyleProp<TextStyle>;
}

const MenuItemName: FunctionComponent<MenuItemNameProps> = ({ style }) => {
  const { name } = useItem();
  return <Text style={[styles.text, style]}>{name}</Text>;
};

export default MenuItemName;

const styles = StyleSheet.create({
  text: { fontSize: 20, textAlign: "center" },
});
