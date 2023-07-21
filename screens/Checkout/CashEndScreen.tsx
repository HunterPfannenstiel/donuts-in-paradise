import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import { CheckoutScreenComponent } from "./RouteTypes";
import Title from "@ui/Title";

interface CashEndScreenProps extends CheckoutScreenComponent<"CashEndScreen"> {}

const CashEndScreen = ({ route }: CashEndScreenProps) => {
  return <Title>Change Owed: ${route.params.change}</Title>;
};

export default CashEndScreen;

const styles = StyleSheet.create({
  container: {},
});
