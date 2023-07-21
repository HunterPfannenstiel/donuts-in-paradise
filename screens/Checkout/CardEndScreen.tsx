import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import { CheckoutScreenComponent } from "./RouteTypes";

interface CardEndScreenProps extends CheckoutScreenComponent<"CardEndScreen"> {}

const CardEndScreen = ({ route, navigation }: CardEndScreenProps) => {
  return <View style={styles.container}></View>;
};

export default CardEndScreen;

const styles = StyleSheet.create({
  container: {},
});
