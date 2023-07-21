import { FunctionComponent, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  StyleProp,
  ViewStyle,
  Pressable,
  ScrollView,
} from "react-native";
import NumberInput, { NumberInputProps } from "./NumberInput";
import { Styles } from "@constants/styles";
import RowContainer from "@ui/RowContainer";

type NumberLabelProps = {
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
} & NumberInputProps;

const NumberLabel: FunctionComponent<NumberLabelProps> = ({
  label,
  labelStyle,
  style,
  ...restProps
}) => {
  const numberInput = useRef<TextInput | null>();
  const getInputRef = (input: TextInput | null) => {
    numberInput.current = input;
  };
  const labalClickHandler = () => {
    numberInput.current!.focus();
  };
  return (
    <ScrollView
      contentContainerStyle={[styles.container, style, { flexGrow: 1 }]}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={false}
    >
      <RowContainer>
        <Pressable onPress={labalClickHandler}>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        </Pressable>
        <NumberInput {...restProps} ref={getInputRef} />
      </RowContainer>
    </ScrollView>
  );
};

export default NumberLabel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 24,
    fontFamily: Styles.Fonts.normal,
  },
});
