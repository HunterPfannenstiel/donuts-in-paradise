import { Styles } from "@constants/styles";
import React, { FunctionComponent, ReactNode } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

interface InputButtonProps {
  label: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const InputButton: FunctionComponent<InputButtonProps> = ({
  label,
  children,
  style,
  textStyle,
  onPress,
}) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      {children}
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </Pressable>
  );
};

export default InputButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
  },
  label: {
    fontSize: 24,
    fontFamily: Styles.Fonts.normal,
  },
});
