import { Styles } from "@constants/styles";
import { useCart } from "@store/cart";
import IconText from "@ui/IconText";
import { FunctionComponent } from "react";
import { Pressable, StyleSheet, View } from "react-native";

interface CashOptionsProps {
  total: number;
  onOptionSelect: (amount: number) => void;
}

const CashOptions: FunctionComponent<CashOptionsProps> = ({
  total,
  onOptionSelect,
}) => {
  return (
    <View style={styles.container}>
      {getCashOptions(total).map((option) => {
        return (
          <IconText
            as={Pressable}
            style={styles.textOption}
            icon="checkmark-done"
            text={option}
            onPress={onOptionSelect.bind(null, +option)}
          />
        );
      })}
    </View>
  );
};

export default CashOptions;

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-around" },
  textOption: {
    padding: 24,
    borderRadius: Styles.BorderRadius.md,
    backgroundColor: Styles.Colors.logoBlue,
  },
});

const getCashOptions = (total: number) => {
  return [total.toFixed(2), (total + 5).toFixed(2), (total + 10).toFixed(2)];
};
