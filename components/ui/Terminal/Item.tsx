import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import MenuItem from "../MenuItem";

interface ItemProps {}

const Item: FunctionComponent<ItemProps> = () => {
  return (
    <MenuItem
      item={{
        name: "Apple Cider",
        image:
          "https://res.cloudinary.com/dwg1i9w2u/image/upload/v1673400244/item_images/fgvymicizcsmmwqgbgyh.png",
      }}
      onPress={() => {
        console.log("Pressed");
      }}
    >
      <MenuItem.Image />
      <MenuItem.Name />
    </MenuItem>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {},
});
