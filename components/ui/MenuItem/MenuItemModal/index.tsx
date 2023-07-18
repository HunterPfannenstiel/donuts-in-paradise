import { MenuItem } from "@_types/menu";
import { useMenu } from "@store/menu";
import IconText from "@ui/IconText";
import Modal, { ModalComponentProps } from "@ui/Modal";
import { FunctionComponent } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MenuModalButton from "./MenuModalButton";

type MenuItemModalProps = {
  category?: string;
  itemId?: number;
  cartItemId?: number;
};

const MenuItemModal: FunctionComponent<
  ModalComponentProps<MenuItemModalProps>
> = ({ category, itemId, cartItemId, style, ...restProps }) => {
  if (!category || !itemId) {
    return null;
  }
  const { findItem } = useMenu();
  let item: MenuItem;
  item = findItem(category, itemId);

  return (
    <Modal style={[styles.container, style]} {...restProps}>
      <Text style={styles.nameText}>{item.name}</Text>
      <MenuModalButton
        type={cartItemId ? "Modify" : "Add"}
        onPress={() => {
          console.log("add");
        }}
      />
    </Modal>
  );
};

export default MenuItemModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
