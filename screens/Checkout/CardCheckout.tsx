import Title from "@ui/Title";
import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";

interface CardCheckoutProps {}

const CardCheckout: FunctionComponent<CardCheckoutProps> = () => {
  return (
    <View style={styles.container}>
      <Title>Card</Title>
    </View>
  );
};

export default CardCheckout;

const styles = StyleSheet.create({
  container: {},
});
