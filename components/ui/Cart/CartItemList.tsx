import { FunctionComponent } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useCart } from "../../../store/cart";
import CartItem from "./CartItem";

interface CartItemListProps {}

const CartItemList: FunctionComponent<CartItemListProps> = () => {
  const { items } = useCart();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {items.map((item) => {
        return (
          <CartItem cartItem={item} style={styles.item}>
            <CartItem.Image />
            <View>
              <CartItem.Details />
              <CartItem.Extras />
            </View>
            <CartItem.Price />
          </CartItem>
        );
      })}
      {items.length !== 0 ? <Text>Tax</Text> : null}
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
