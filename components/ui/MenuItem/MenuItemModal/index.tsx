import Modal, { ModalComponentProps } from "@ui/Modal";
import { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";

interface MenuItemModalProps {
  itemId: number;
}

const MenuItemModal: FunctionComponent<
  ModalComponentProps<MenuItemModalProps>
> = ({ itemId, ...restProps }) => {
  return (
    <Modal style={styles.container} {...restProps}>
      <Text>Item {itemId}</Text>
    </Modal>
  );
};

export default MenuItemModal;

const styles = StyleSheet.create({
  container: {},
});
