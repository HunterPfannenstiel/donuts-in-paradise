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
            icon="md-checkmark-done-sharp"
            text={"$" + option}
            onPress={onOptionSelect.bind(null, +option)}
            key={option}
          />
        );
      })}
    </View>
  );
};

export default CashOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "75%",
  },
  textOption: {
    padding: 24,
    borderRadius: Styles.BorderRadius.md,
    backgroundColor: Styles.Colors.logoBlue,
  },
});

const getCashOptions = (total: number) => {
  const fiveRemainder = 5 - (total % 10);
  const fiveAmount =
    fiveRemainder < 0
      ? Math.trunc(total + 5 + fiveRemainder)
      : Math.trunc(total + fiveRemainder);
  const oneAmount =
    total !== Math.trunc(total) ? Math.trunc(total + 1) : undefined;
  const amounts = [total.toFixed(2)];
  if (oneAmount) amounts.push(oneAmount + ".00");
  if (fiveAmount !== oneAmount) amounts.push(fiveAmount + ".00");
  amounts.push(fiveAmount + 5 + ".00");
  return amounts;
};
