import Title from "@ui/Title";
import { FunctionComponent, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { CheckoutScreenNavigationProp } from "./RouteTypes";
import { useCart } from "@store/cart";

interface CashCheckoutProps {
  navigation: CheckoutScreenNavigationProp;
}

const CashCheckout: FunctionComponent<CashCheckoutProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title>Cash</Title>
    </View>
  );
};

export default CashCheckout;

const styles = StyleSheet.create({
  container: {},
});
