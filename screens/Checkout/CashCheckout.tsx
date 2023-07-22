import Title from "@ui/Title";
import { StyleSheet, View, Pressable } from "react-native";
import { CheckoutScreenComponent } from "./RouteTypes";
import { useCart } from "@store/cart";
import CashOptions from "@ui/Checkout/CashScreen/CashOptions";
import LabeledInput from "@ui/Input/LabeledInput";
import ValidatedInput from "@ui/Input/ValidatedInput";
import useInputState from "@hooks/useInputState";
import IconText from "@ui/IconText";
import { Styles } from "@constants/styles";
import DismissKeyboard from "@ui/Input/DismissKeyboard";

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
      navigation.navigate("EndScreen", {
        name: route.params.name,
        change: enteredValue - price,
      });
    }
  };
  const optionSelectHandler = (amount: number) => {
    navigation.navigate("EndScreen", {
      name: route.params.name,
      change: amount - price,
    });
  };
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Title textAlign="center">Amount Recieved:</Title>
        <CashOptions total={price} onOptionSelect={optionSelectHandler} />
        <LabeledInput
          label="Custom: $"
          as={ValidatedInput}
          onChangeText={setValue}
          isValid={isValid}
          errorMessage={errorMessage || ""}
          containerStyle={styles.inputContainer}
          keyboardType="numeric"
          style={styles.input}
        />
        <IconText
          as={Pressable}
          text="Confirm"
          icon="arrow-forward"
          style={styles.confirmButton}
          onPress={confirmHandler}
        />
      </View>
    </DismissKeyboard>
  );
};

export default CashCheckout;

const styles = StyleSheet.create({
  container: { gap: 24, paddingTop: 16, alignItems: "center" },
  inputContainer: {
    minWidth: 100,
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  confirmButton: {
    padding: Styles.Padding.md,
    backgroundColor: Styles.Colors.logoPurple,
    borderRadius: Styles.BorderRadius.md,
  },
});
