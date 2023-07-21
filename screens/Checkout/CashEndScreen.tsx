import { FunctionComponent } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { CheckoutScreenComponent } from "./RouteTypes";
import Title from "@ui/Title";
import IconText from "@ui/IconText";
import { Styles } from "@constants/styles";
import { useCart } from "@store/cart";

interface CashEndScreenProps extends CheckoutScreenComponent<"CashEndScreen"> {}

const CashEndScreen = ({ route, navigation }: CashEndScreenProps) => {
  const { deleteCart } = useCart();
  const completeOrderHandler = () => {
    deleteCart();
    navigation.navigate("Terminal");
  };
  return (
    <View style={styles.container}>
      <Title>Change Owed: ${route.params.change}</Title>
      <View style={styles.buttonContainer}>
        <IconText
          as={Pressable}
          text="Print Reciept"
          icon="print-sharp"
          style={styles.button}
        />
        <IconText
          as={Pressable}
          text="Complete Order"
          icon="checkmark-done-circle-sharp"
          style={styles.button}
          onPress={completeOrderHandler}
        />
      </View>
    </View>
  );
};

export default CashEndScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  buttonContainer: {
    flexDirection: "row",
    gap: 24,
    justifyContent: "center",
  },
  button: {
    padding: 24,
    backgroundColor: Styles.Colors.logoYellow,
    borderRadius: Styles.BorderRadius.md,
  },
});
