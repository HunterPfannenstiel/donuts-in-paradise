import { FunctionComponent, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useCart } from "../../../store/cart";
import CartItem from "./CartItem";
import useModal from "@hooks/useModal";
import MenuItemModal from "@ui/MenuItem/MenuItemModal";

type SelectedItem = { category: string; itemId: number; cartItemId: number };

interface CartItemListProps {}

const CartItemList: FunctionComponent<CartItemListProps> = () => {
  const { sections } = useCart().cart;
  const { getModalProps, handleModal, visible } = useModal();
  const [selectedItem, setSelectedItem] = useState<SelectedItem>();
  const itemPressHandler = (
    category: string,
    itemId: number,
    cartItemId: number
  ) => {
    setSelectedItem({
      category,
      itemId,
      cartItemId,
    });
    handleModal();
  };
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {sections.map((section) => {
          return section.items.map((item) => {
            const { name, price, imageUrl, id, category } = section;
            return (
              <CartItem
                cartItem={{ ...item, name, price, imageUrl, category }}
                style={styles.item}
                key={item.id}
                onPress={itemPressHandler.bind(
                  null,
                  section.category,
                  id,
                  item.id
                )}
              >
                <CartItem.Image />
                <View>
                  <CartItem.Details />
                  <CartItem.Extras />
                </View>
                <CartItem.Price />
              </CartItem>
            );
          });
        })}
        {sections.length !== 0 ? <Text>Tax</Text> : null}
      </ScrollView>
      {visible && <MenuItemModal {...getModalProps()} {...selectedItem} />}
    </>
  );
};

export default CartItemList;

const styles = StyleSheet.create({
  container: { padding: 8 },
  item: {
    justifyContent: "space-between",
  },
});
