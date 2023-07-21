import Title from "@ui/Title";
import { FunctionComponent } from "react";
import { Button, StyleSheet, View } from "react-native";
import { CheckoutScreenComponent } from "./RouteTypes";
import CashOptions from "@ui/Checkout/CashScreen/CashOptions";
import LabeledInput from "@ui/Input/LabeledInput";
import ValidatedInput from "@ui/Input/ValidatedInput";

interface CardCheckoutProps extends CheckoutScreenComponent<"CardCheckout"> {}

const CardCheckout: FunctionComponent<CardCheckoutProps> = ({
  route,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Title textAlign="center">Checkout</Title>
    </View>
  );
};

export default CardCheckout;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
