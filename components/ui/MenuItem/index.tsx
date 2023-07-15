import { Styles } from "../../../constants/styles";
import { ReactNode, createContext, useContext } from "react";
import { StyleSheet, Pressable, StyleProp, ViewStyle } from "react-native";
import MenuItemName from "./MenuItemName";
import MenuItemImage from "./MenuItemImage";
import MenuItemPrice from "./MenuItemPrice";
import { Item, ItemType } from "./context";

interface MenuItemProps {
  item: ItemType;
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
    borderRadius: Styles.BorderRadius.lg,
    borderWidth: 1,
    borderColor: Styles.Colors.logoPurple,
    padding: 16,
  },
});
