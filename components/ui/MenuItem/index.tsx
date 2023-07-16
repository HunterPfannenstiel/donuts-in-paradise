import { Styles } from "../../../constants/styles";
import { ReactNode, createContext, useContext } from "react";
import { StyleSheet, Pressable, StyleProp, ViewStyle } from "react-native";
import MenuItemName from "./MenuItemName";
import MenuItemImage from "./MenuItemImage";
import MenuItemPrice from "./MenuItemPrice";
import { Item } from "./context";
import { MenuItem as MenuItemT } from "types";

interface MenuItemProps {
  item: MenuItemT;
  onPress: () => void;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const MenuItem = ({ item, onPress, children, style }: MenuItemProps) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Item.Provider value={item}>{children}</Item.Provider>
    </Pressable>
  );
};

export default MenuItem;

MenuItem.Image = MenuItemImage;
MenuItem.Name = MenuItemName;
MenuItem.Price = MenuItemPrice;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
  },
});
