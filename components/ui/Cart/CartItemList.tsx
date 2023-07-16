import { FunctionComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useCart } from "../../../store/cart";
import CartItem from "./CartItem";

interface CartItemListProps {}

const CartItemList: FunctionComponent<CartItemListProps> = () => {
  const { items } = useCart();
  return (
    <View style={styles.container}>
      {items.map((item) => {
        return (
          <CartItem cartItem={item}>
            <View>
              <CartItem.Details />
              <CartItem.Extras />
            </View>
            <CartItem.Price />
          </CartItem>
        );
      })}
      {items.length !== 0 ? <Text>Tax</Text> : null}
    </View>
  );
};

export default CartItemList;

const styles = StyleSheet.create({
  container: {},
});
