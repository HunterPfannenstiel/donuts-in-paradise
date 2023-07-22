import { Styles } from "@constants/styles";
import {
  ComponentPropsWithoutRef,
  FunctionComponent,
  LegacyRef,
  forwardRef,
  useEffect,
} from "react";
import { Alert, StyleSheet, TextInput } from "react-native";

type ValidatedInputProps = {
  errorMessage: string;
  isValid: boolean;
  title?: string;
  alertButtonText?: string;
  ref?: (input: TextInput | null) => void;
} & ComponentPropsWithoutRef<typeof TextInput>;

const ValidatedInput: FunctionComponent<ValidatedInputProps> = ({
  errorMessage,
  isValid,
  title,
  alertButtonText,
  style,
  ref,
  ...restProps
}) => {
  useEffect(() => {
    if (!isValid) {
      Alert.alert(title || "Invalid Input", errorMessage, [
        { text: alertButtonText || "Okay", style: "cancel" },
      ]);
    }
  }, [isValid]);
  return (
    <TextInput
      {...restProps}
      style={[styles.input, style, !isValid && styles.error]}
      ref={ref}
    />
  );
};
export default ValidatedInput;

const styles = StyleSheet.create({
  input: {
    fontSize: 24,
    fontFamily: Styles.Fonts.normal,
    fontWeight: "400",
  },
  error: {
    borderColor: "#cc0000",
    borderWidth: 1,
  },
});
