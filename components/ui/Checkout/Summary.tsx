import { useCart } from "@store/cart";
import IconText from "@ui/IconText";
import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import PaymentOption from "./PaymentOption";
import { Styles } from "@constants/styles";

interface SummaryProps {}

const Summary: FunctionComponent<SummaryProps> = () => {
  const { price, totalItems } = useCart().cart;
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <IconText
          icon="cash-sharp"
          text={`Total Price: $${price.toFixed(2)}`}
        />
        <IconText
          icon="checkmark-circle-sharp"
          text={`Total Items: ${totalItems}`}
        />
      </View>
      <PaymentOption backgroundColor={Styles.Colors.logoBlue}>
        <IconText icon="cash" text="Pay with Cash" />
      </PaymentOption>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
});
