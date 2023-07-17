import { Styles } from "@constants/styles";
import { FunctionComponent } from "react";
import { StyleSheet, View, Text } from "react-native";

interface CartItemExtraProps {
  name: string;
  category: string;
  price?: number | null;
}

const CartItemExtra: FunctionComponent<CartItemExtraProps> = ({
  name,
  category,
  price,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{category}</Text>
      {price ? <Text style={styles.text}>(+${price})</Text> : null}
    </View>
  );
};

export default CartItemExtra;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
  },
  text: {
    color: Styles.Colors.gray,
  },
});
