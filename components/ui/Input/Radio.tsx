import { FunctionComponent } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Styles } from "@constants/styles";

interface RadioProps {
  isSelected: boolean;
  onPress?: () => void;
  backgroundColor?: string;
  borderColor?: string;
  fillColor?: string;
  size?: number;
}

const Radio: FunctionComponent<RadioProps> = ({
  isSelected,
  onPress,
  backgroundColor,
  borderColor,
  fillColor,
  size,
}) => {
  const userStyles: StyleProp<ViewStyle> = {};
  const fillStyles: StyleProp<ViewStyle> = {};
  if (fillColor) fillStyles["backgroundColor"] = fillColor;
  if (backgroundColor) userStyles["backgroundColor"] = backgroundColor;
  if (borderColor) userStyles["borderColor"] = borderColor;
  if (size) {
    const diameter = size * 1.3;
    userStyles["width"] = diameter;
    userStyles["height"] = diameter;
    userStyles["borderRadius"] = diameter / 2;
    userStyles["borderWidth"] = size * 0.05;
    const fillDiameter = diameter * 0.75;
    fillStyles["width"] = fillDiameter;
    fillStyles["height"] = fillDiameter;
    fillStyles["borderRadius"] = fillDiameter / 2;
  }
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.radioContainer, userStyles]}>
        {isSelected && <View style={[styles.fill, fillStyles]} />}
      </View>
    </Pressable>
  );
};

export default Radio;

const styles = StyleSheet.create({
  radioContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: Styles.Colors.logoBlue,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Styles.Colors.logoYellow,
  },
});
