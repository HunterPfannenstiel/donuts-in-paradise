import { Styles } from "@constants/styles";
import { useNavigation } from "@react-navigation/native";
import { CheckoutScreenNavigationProp } from "@screens/Checkout/RouteTypes";
import IconText from "@ui/IconText";
import RowContainer from "@ui/RowContainer";
import { FunctionComponent, ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface PaymentOptionProps {
  children: ReactNode;
  backgroundColor: string;
}

const PaymentOption: FunctionComponent<PaymentOptionProps> = ({
  children,
  backgroundColor,
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>{children}</View>
  );
};

export default PaymentOption;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: Styles.BorderRadius.lg,
  },
});
