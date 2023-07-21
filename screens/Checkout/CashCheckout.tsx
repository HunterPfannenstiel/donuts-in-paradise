import Title from "@ui/Title";
import { StyleSheet, View, Button } from "react-native";
import { CheckoutScreenComponent } from "./RouteTypes";
import { useCart } from "@store/cart";
import CashOptions from "@ui/Checkout/CashScreen/CashOptions";
import LabeledInput from "@ui/Input/LabeledInput";
import ValidatedInput from "@ui/Input/ValidatedInput";
import useInputState from "@hooks/useInputState";

interface CashCheckoutProps extends CheckoutScreenComponent<"CashCheckout"> {}

const CashCheckout = ({ route, navigation }: CashCheckoutProps) => {
  const [{ value, isValid }, { setValue, setIsValid }] = useInputState("");
  const { price } = useCart().cart;
  const confirmHandler = () => {
    const enteredValue = +value;
    if (!value || !enteredValue || enteredValue < price) {
      setIsValid(false);
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
        Input={ValidatedInput}
        onChangeText={setValue}
        isValid={isValid}
      />
      <Button title="Go" onPress={confirmHandler} />
    </View>
  );
};

export default CashCheckout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
