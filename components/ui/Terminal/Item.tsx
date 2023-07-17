import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import MenuItem from "../MenuItem";
import { MenuItem as MenuItemT } from "types";

interface ItemProps {
  item: MenuItemT;
  onPress: () => void;
}

const Item: FunctionComponent<ItemProps> = ({ item, onPress }) => {
  return (
    <MenuItem item={item} onPress={onPress} style={styles.item}>
      <MenuItem.Image />
      <MenuItem.Name />
    </MenuItem>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    width: "15%",
  },
});
