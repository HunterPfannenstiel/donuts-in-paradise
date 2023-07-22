import { useCart } from "@store/cart";
import IconText from "@ui/IconText";
import { FunctionComponent } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import PaymentOption from "./PaymentOption";
import { Styles } from "@constants/styles";
import { useNavigation } from "@react-navigation/native";
import { CheckoutScreenNavigationProp } from "@screens/Checkout/RouteTypes";
import LabeledInput from "@ui/Input/LabeledInput";
import ValidatedInput from "@ui/Input/ValidatedInput";
import useInputState from "@hooks/useInputState";
import DismissKeyboard from "@ui/Input/DismissKeyboard";

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
    <DismissKeyboard>
      <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.summary}>
            <IconText
              icon="cash-sharp"
              text={`Total Price: $${price.toFixed(2)}`}
              textStyle={styles.text}
            />
            <IconText
              icon="checkmark-circle-sharp"
              text={`Total Items: ${totalItems}`}
              textStyle={styles.text}
            />
          </View>
          <LabeledInput
            label="Name:"
            as={ValidatedInput}
            onChangeText={setValue}
            errorMessage={"Please enter a name"}
            isValid={isValid}
            style={styles.name}
            placeholder="Donut Paradise"
            containerStyle={styles.nameContainer}
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
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 16,
    paddingTop: 16,
  },
  summary: {
    flexDirection: "row",
    gap: 36,
  },
  nameContainer: {
    justifyContent: "center",
    minWidth: "50%",
  },
  name: {
    width: 500,
  },
  paymentOptions: {
    flexDirection: "row",
    gap: 16,
  },
  text: {
    fontSize: 24,
    padding: Styles.Padding.sm,
  },
});
