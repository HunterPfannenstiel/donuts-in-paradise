import { FunctionComponent } from "react";
import { StyleSheet, Pressable } from "react-native";
import IconText from "../IconText";
import { Styles } from "@constants/styles";
import { useCart } from "@store/cart";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "screens/types";

interface CheckoutButtonProps {}

const CheckoutButton: FunctionComponent<CheckoutButtonProps> = () => {
  const { navigate } = useNavigation<HomeScreenNavigationProp>();
  const { price } = useCart().cart;
  return (
    <IconText
      as={Pressable}
      icon="cash"
      text={`Checkout $${price.toFixed(2)}`}
      style={styles.button}
      textStyle={styles.text}
      onPress={() => {
        navigate("Checkout");
      }}
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
