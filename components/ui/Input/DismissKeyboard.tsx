import { FunctionComponent, ReactNode } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

interface DismissKeyboardProps {
  children: ReactNode;
}

const DismissKeyboard: FunctionComponent<DismissKeyboardProps> = ({
  children,
}) => {
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;

const styles = StyleSheet.create({
  container: {},
});
