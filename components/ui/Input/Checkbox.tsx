import { FunctionComponent } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Styles } from "@constants/styles";

interface CheckboxProps {
  isSelected: boolean;
  onPress?: () => void;
  backgroundColor?: string;
  borderColor?: string;
  checkColor?: string;
  size?: number;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({
  isSelected,
  onPress,
  backgroundColor,
  borderColor,
  checkColor,
  size,
}) => {
  const userStyles: StyleProp<ViewStyle> = {};
  if (backgroundColor) userStyles["backgroundColor"] = backgroundColor;
  if (borderColor) userStyles["borderColor"] = borderColor;
  if (size) {
    userStyles["width"] = size * 1.3;
    userStyles["height"] = size * 1.3;
    userStyles["borderRadius"] = size * 0.4;
    userStyles["borderWidth"] = size * 0.05;
  }

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={[styles.checkbox, userStyles]}>
        {isSelected && (
          <Entypo
            name="check"
            color={checkColor || Styles.Colors.logoYellow}
            size={size || 18}
          />
        )}
      </View>
    </Pressable>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {},
  checkbox: {
    width: 24,
    height: 24,
    borderColor: Styles.Colors.logoBlue,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
