import {
  FunctionComponent,
  LegacyRef,
  forwardRef,
  useRef,
  useState,
} from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  ViewStyle,
} from "react-native";

export type NumberInputProps = {
  onChange?: (number: number) => void;
  initialNumber?: number;
  value?: number;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  ref?: (input: TextInput | null) => void;
};

const NumberInput: FunctionComponent<NumberInputProps> = ({
  onChange,
  initialNumber = 0,
  value,
  style,
  ref,
  inputStyle,
}) => {
  const isControlled = value !== undefined && onChange;
  const [number, setNumber] = useState(initialNumber.toString());
  const currentNumber = useRef(initialNumber.toString());
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
  const blurHandler = () => {
    if (number === "") setNumber(currentNumber.current);
  };
  const focusHandler = () => {
    setNumber("");
    currentNumber.current = number;
  };
  return (
    <TextInput
      style={[styles.text, inputStyle]}
      value={getState()}
      onChangeText={handleChange}
      keyboardType="number-pad"
      ref={ref}
      onBlur={blurHandler}
      onFocus={focusHandler}
    />
  );
};

export default NumberInput;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
