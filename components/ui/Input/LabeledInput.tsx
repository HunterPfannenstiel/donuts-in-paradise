import { PolymorphicComponentWithRef } from "@_types/polymorphic";
import { Styles } from "@constants/styles";
import RowContainer from "@ui/RowContainer";
import { ComponentType, useRef } from "react";
import {
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  ViewStyle,
  Text,
  KeyboardAvoidingView,
  View,
} from "react-native";

type LabeledInputProps = {
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

const LabeledInput = <C extends ComponentType<any> = typeof View>({
  label,
  as,
  labelStyle,
  containerStyle,
  ref,
  ...restProps
}: PolymorphicComponentWithRef<C, LabeledInputProps>) => {
  const input = useRef<TextInput | null>();
  const getInputRef = (ref: any | null) => {
    input.current = ref;
  };
  const labalClickHandler = () => {
    input.current!.focus();
  };
  const Input = as || View;
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        containerStyle,
        { flexGrow: 1 },
      ]}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={false}
    >
      <RowContainer>
        <Pressable onPress={labalClickHandler}>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        </Pressable>
        <KeyboardAvoidingView style={styles.container} behavior="position">
          <Input {...restProps} />
        </KeyboardAvoidingView>
      </RowContainer>
    </ScrollView>
  );
};

export default LabeledInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 24,
    fontFamily: Styles.Fonts.normal,
  },
});
