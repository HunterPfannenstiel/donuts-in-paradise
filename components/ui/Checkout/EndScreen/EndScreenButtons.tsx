import { Styles } from "@constants/styles";
import IconText from "@ui/IconText";
import { FunctionComponent } from "react";
import { Pressable, StyleSheet, View } from "react-native";

interface EndScreenButtonsProps {
  completeOrderHandler: () => void;
}

const EndScreenButtons: FunctionComponent<EndScreenButtonsProps> = ({
  completeOrderHandler,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <IconText
        as={Pressable}
        text="Print Reciept"
        icon="print-sharp"
        style={styles.button}
        textStyle={styles.buttonText}
      />
      <IconText
        as={Pressable}
        text="Complete Order"
        icon="checkmark-done-circle-sharp"
        style={styles.button}
        onPress={completeOrderHandler}
        textStyle={styles.buttonText}
      />
    </View>
  );
};

export default EndScreenButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    gap: 24,
    justifyContent: "center",
    width: "75%",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 48,
    backgroundColor: Styles.Colors.logoYellow,
    borderRadius: Styles.BorderRadius.lg,
  },
  buttonText: {
    fontSize: 24,
    textAlign: "center",
  },
});
