import { FunctionComponent, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  ViewStyle,
} from "react-native";

interface NumberInputProps {
  onChange?: (number: number) => void;
  initialNumber?: number;
  value?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const NumberInput: FunctionComponent<NumberInputProps> = ({
  onChange,
  initialNumber = 0,
  value,
  style,
  textStyle,
}) => {
  const isControlled = value !== undefined && onChange;
  const [number, setNumber] = useState(initialNumber.toString());
  const handleChange = (num: string) => {
    if (isControlled) {
      onChange(+num);
    } else {
      if (onChange) onChange(+num);
      setNumber(num);
    }
  };
  const getState = () => {
    return isControlled ? value.toString() : number;
  };
  return (
    <ScrollView style={[styles.screen, style]}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <TextInput
          style={[styles.text, textStyle]}
          value={getState()}
          onChangeText={handleChange}
          keyboardType="number-pad"
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default NumberInput;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
});
