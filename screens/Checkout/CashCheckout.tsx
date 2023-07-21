import Title from "@ui/Title";
import { StyleSheet, View, Button, Pressable } from "react-native";
import { CheckoutScreenComponent } from "./RouteTypes";
import { useCart } from "@store/cart";
import CashOptions from "@ui/Checkout/CashScreen/CashOptions";
import LabeledInput from "@ui/Input/LabeledInput";
import ValidatedInput from "@ui/Input/ValidatedInput";
import useInputState from "@hooks/useInputState";
import IconText from "@ui/IconText";
import { Styles } from "@constants/styles";

interface CashCheckoutProps extends CheckoutScreenComponent<"CashCheckout"> {}

const CashCheckout = ({ route, navigation }: CashCheckoutProps) => {
  const [{ value, isValid, errorMessage }, { setValue, setIsValid }] =
    useInputState("");
  const { price } = useCart().cart;
  const confirmHandler = () => {
    const enteredValue = +value;
    if (!value) {
      setIsValid(false, "Please select a cash amount or enter a cash amount.");
    } else if (!enteredValue) {
      setIsValid(false, "Please enter a valid number for the cash amount.");
    } else if (enteredValue < price) {
      setIsValid(
        false,
        "Please enter a cash amount greater than or equal to the order total."
      );
    } else {
      navigation.navigate("CashEndScreen", {
        name: route.params.name,
        change: enteredValue - price,
      });
    }
  };
  const optionSelectHandler = (amount: number) => {
    navigation.navigate("CashEndScreen", {
      name: route.params.name,
      change: amount - price,
    });
  };
  return (
    <View style={styles.container}>
      <Title textAlign="center">Amount Recieved</Title>
      <CashOptions total={price} onOptionSelect={optionSelectHandler} />
      <LabeledInput
        label="Custom"
        as={ValidatedInput}
        onChangeText={setValue}
        isValid={isValid}
        errorMessage={errorMessage || ""}
        containerStyle={styles.input}
      />
      <IconText
        as={Pressable}
        text="Confirm"
        icon="arrow-forward"
        style={styles.confirmButton}
        onPress={confirmHandler}
      />
    </View>
  );
};

export default CashCheckout;

const styles = StyleSheet.create({
  container: { gap: 16 },
  input: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  confirmButton: {
    padding: Styles.Padding.md,
    backgroundColor: Styles.Colors.logoPurple,
    borderRadius: Styles.BorderRadius.md,
  },
});
