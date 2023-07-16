import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import MenuItem from "../MenuItem";
import { MenuItem as MenuItemT } from "types";

interface ItemProps {
  item: MenuItemT;
}

const Item: FunctionComponent<ItemProps> = ({ item }) => {
  return (
    <MenuItem
      item={item}
      onPress={() => {
        console.log("Pressed");
      }}
      style={styles.item}
    >
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
