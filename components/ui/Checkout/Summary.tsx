import { useCart } from "@store/cart";
import IconText from "@ui/IconText";
import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import PaymentOption from "./PaymentOption";
import { Styles } from "@constants/styles";
import { useNavigation } from "@react-navigation/native";
import { CheckoutScreenNavigationProp } from "@screens/Checkout/RouteTypes";
import LabeledInput from "@ui/Input/LabeledInput";
import ValidatedInput from "@ui/Input/ValidatedInput";
import useInputState from "@hooks/useInputState";

interface SummaryProps {}

const Summary: FunctionComponent<SummaryProps> = () => {
  const { price, totalItems } = useCart().cart;
  const { navigate } = useNavigation<CheckoutScreenNavigationProp>();
  const [{ value, isValid }, { setValue, setIsValid }] = useInputState("");
  const navigationHandler = (screenName: "CardCheckout" | "CashCheckout") => {
    if (value) {
      navigate(screenName, { name: value });
    } else {
      setIsValid(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <IconText
          icon="cash-sharp"
          text={`Total Price: $${price.toFixed(2)}`}
        />
        <IconText
          icon="checkmark-circle-sharp"
          text={`Total Items: ${totalItems}`}
        />
      </View>
      <LabeledInput
        label="Name:"
        as={ValidatedInput}
        onChangeText={setValue}
        errorMessage={"Please enter a name"}
        isValid={isValid}
      />
      <View style={styles.paymentOptions}>
        <PaymentOption
          text="Pay With Cash"
          backgroundColor="green"
          icon="cash"
          onPress={navigationHandler.bind(null, "CashCheckout")}
        />
        <PaymentOption
          text="Pay With Card"
          backgroundColor={Styles.Colors.logoPurple}
          icon="card"
          onPress={navigationHandler.bind(null, "CardCheckout")}
        />
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: { flex: 1 },
  summary: { alignItems: "center" },
  paymentOptions: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "center",
  },
});
