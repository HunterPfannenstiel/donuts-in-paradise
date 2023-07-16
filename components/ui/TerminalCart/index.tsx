import { DeviceSizes } from "../../../constants/styles";
import { FunctionComponent } from "react";
import {
  StyleSheet,
  View,
  useWindowDimensions,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useCart } from "store/cart";
import CartItemList from "../Cart/CartItemList";

interface TerminalCartProps {}

const TerminalCart: FunctionComponent<TerminalCartProps> = () => {
  const { width } = useWindowDimensions();
  const style: StyleProp<ViewStyle> =
    width <= DeviceSizes.Small
      ? { width: "100%", position: "absolute", top: "100%", padding: 16 }
      : { width: "30%" };
  return (
    <View style={[styles.container, style]}>
      <CartItemList />
    </View>
  );
};

export default TerminalCart;

const styles = StyleSheet.create({
  container: { borderWidth: 2 },
});
