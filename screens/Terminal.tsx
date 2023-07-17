import TerminalCart from "@ui/TerminalCart";
import MenuItemList from "@ui/Terminal/MenuItemList";
import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";

interface TerminalProps {}

const Terminal: FunctionComponent<TerminalProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <MenuItemList menuItems={items} />
        <TerminalCart />
      </View>
    </View>
  );
};

export default Terminal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    flex: 1,
  },
});

const items = [
  {
    id: 1,
    name: "Apple Cider",
    image:
      "https://res.cloudinary.com/dwg1i9w2u/image/upload/v1673400244/item_images/fgvymicizcsmmwqgbgyh.png",
  },
  {
    id: 2,
    name: "Apple Cider",
    image:
      "https://res.cloudinary.com/dwg1i9w2u/image/upload/v1673400244/item_images/fgvymicizcsmmwqgbgyh.png",
  },
  {
    id: 3,
    name: "Apple Cider",
    image:
      "https://res.cloudinary.com/dwg1i9w2u/image/upload/v1673400244/item_images/fgvymicizcsmmwqgbgyh.png",
  },
  {
    id: 4,
    name: "Apple Cider",
    image:
      "https://res.cloudinary.com/dwg1i9w2u/image/upload/v1673400244/item_images/fgvymicizcsmmwqgbgyh.png",
  },
  {
    id: 5,
    name: "Apple Cider",
    image:
      "https://res.cloudinary.com/dwg1i9w2u/image/upload/v1673400244/item_images/fgvymicizcsmmwqgbgyh.png",
  },
  {
    id: 6,
    name: "Apple Cider",
    image:
      "https://res.cloudinary.com/dwg1i9w2u/image/upload/v1673400244/item_images/fgvymicizcsmmwqgbgyh.png",
  },
  {
    id: 7,
    name: "Apple Cider",
    image:
      "https://res.cloudinary.com/dwg1i9w2u/image/upload/v1673400244/item_images/fgvymicizcsmmwqgbgyh.png",
  },
];
