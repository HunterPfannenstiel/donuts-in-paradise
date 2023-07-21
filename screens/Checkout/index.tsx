import Title from "@ui/Title";
import { FunctionComponent } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { CheckoutScreenComponent } from "./RouteTypes";
import Summary from "@ui/Checkout/Summary";

interface CheckoutProps extends CheckoutScreenComponent<"CheckoutHome"> {}

const Checkout = ({ route, navigation }: CheckoutProps) => {
  return (
    <View style={styles.container}>
      <Summary />
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
