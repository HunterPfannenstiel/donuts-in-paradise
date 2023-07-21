import Title from "@ui/Title";
import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import { CheckoutScreenComponent } from "./RouteTypes";

interface CardCheckoutProps extends CheckoutScreenComponent<"CardCheckout"> {}

const CardCheckout: FunctionComponent<CardCheckoutProps> = ({
  route,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Title>Card</Title>
    </View>
  );
};

export default CardCheckout;

const styles = StyleSheet.create({
  container: {},
});
