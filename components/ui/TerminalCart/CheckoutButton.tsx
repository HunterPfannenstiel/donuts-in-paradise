import { FunctionComponent } from "react";
import { StyleSheet, Pressable } from "react-native";
import IconText from "../IconText";
import { Styles } from "../../../constants/styles";

interface CheckoutButtonProps {}

const CheckoutButton: FunctionComponent<CheckoutButtonProps> = () => {
  return (
    <IconText
      as={Pressable}
      icon="cash"
      text="Checkout $24.55"
      style={styles.button}
      textStyle={styles.text}
    />
  );
};

export default CheckoutButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Styles.Colors.logoBlue,
  },
  text: {
    fontFamily: Styles.Fonts.normal,
  },
});
