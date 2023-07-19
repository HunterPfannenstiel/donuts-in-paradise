import Title from "@ui/Title";
import { FunctionComponent } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { CheckoutScreenNavigationProp } from "./RouteTypes";
import Summary from "@ui/Checkout/Summary";

interface CheckoutProps {
  navigation: CheckoutScreenNavigationProp;
}

const Checkout: FunctionComponent<CheckoutProps> = ({ navigation }) => {
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
