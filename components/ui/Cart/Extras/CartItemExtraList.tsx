import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import { useCartItem } from "../context";
import CartItemExtra from "./CartItemExtra";

interface CartItemExtraListProps {}

const CartItemExtraList: FunctionComponent<CartItemExtraListProps> = () => {
  const { extras } = useCartItem();
  return (
    <View style={styles.container}>
      {extras?.map((extra) => {
        return <CartItemExtra key={extra.id} {...extra} />;
      })}
    </View>
  );
};

export default CartItemExtraList;

const styles = StyleSheet.create({
  container: {},
});
