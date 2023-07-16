import { FunctionComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useCartItem } from "./context";
import { Styles } from "../../../constants/styles";

interface CartItemDetailsProps {}

const CartItemDetails: FunctionComponent<CartItemDetailsProps> = () => {
  const { name, amount } = useCartItem();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>x{amount}</Text>
    </View>
  );
};

export default CartItemDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    paddingBottom: 6,
  },
  text: {
    fontSize: 18,
    fontFamily: Styles.Fonts.normal,
  },
});
