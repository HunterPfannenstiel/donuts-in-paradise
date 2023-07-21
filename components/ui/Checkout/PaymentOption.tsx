import { Styles } from "@constants/styles";
import IconText, { PolymorhpicProps } from "@ui/IconText";
import { FunctionComponent } from "react";
import { Pressable, StyleSheet } from "react-native";

type PaymentOptionProps = {
  backgroundColor: string;
} & Omit<PolymorhpicProps<typeof Pressable>, "as" | "style">;

const PaymentOption: FunctionComponent<PaymentOptionProps> = ({
  backgroundColor,
  text,
  icon,
  ...restProps
}) => {
  return (
    <IconText
      as={Pressable}
      icon={icon}
      text={text}
      style={[styles.container, { backgroundColor }]}
      textStyle={styles.text}
      {...restProps}
    />
  );
};

export default PaymentOption;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: Styles.BorderRadius.lg,
  },
  text: {
    fontSize: 26,
    padding: 16,
  },
});
