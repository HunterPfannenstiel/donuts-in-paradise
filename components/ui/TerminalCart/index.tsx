import { DeviceSizes } from "../../../constants/styles";
import { FunctionComponent } from "react";
import {
  StyleSheet,
  View,
  useWindowDimensions,
  StyleProp,
  ViewStyle,
} from "react-native";
import CartItemList from "../Cart/CartItemList";
import CheckoutButton from "./CheckoutButton";

interface TerminalCartProps {}

const TerminalCart: FunctionComponent<TerminalCartProps> = () => {
  const { width } = useWindowDimensions();
  const style: StyleProp<ViewStyle> =
    width <= DeviceSizes.Small
      ? { width: "100%", position: "absolute", top: "100%", padding: 16 }
      : { width: "27%" };
  return (
    <View style={[styles.container, style]}>
      <CartItemList />
      <CheckoutButton />
    </View>
  );
};

export default TerminalCart;

const styles = StyleSheet.create({
  container: {
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    backgroundColor: "white",
  },
});
