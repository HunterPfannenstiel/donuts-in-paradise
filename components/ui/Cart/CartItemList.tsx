import { FunctionComponent } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useCart } from "../../../store/cart";
import CartItem from "./CartItem";

interface CartItemListProps {}

const CartItemList: FunctionComponent<CartItemListProps> = () => {
  const { sections } = useCart().cart;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {sections.map((section) => {
        return section.items.map((item) => {
          const { name, price, imageUrl } = section;
          return (
            <CartItem
              cartItem={{ ...item, name, price, imageUrl }}
              style={styles.item}
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
  );
};

export default CartItemList;

const styles = StyleSheet.create({
  container: { padding: 8 },
  item: {
    justifyContent: "space-between",
  },
});
