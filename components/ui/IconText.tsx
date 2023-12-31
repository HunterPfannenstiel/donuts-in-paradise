import { ComponentType } from "react";
import { StyleSheet, View, Text, StyleProp, TextStyle } from "react-native";
import { PolymorphicComponent } from "../../types/polymorphic";
import { Ionicons } from "@expo/vector-icons";
import { Styles } from "@constants/styles";

interface IconTextProps {
  text: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  color?: string;
  size?: number;
  style?: StyleProp<any>;
}

export type PolymorhpicProps<C extends ComponentType = typeof View> =
  PolymorphicComponent<C, IconTextProps>;

const IconText = <C extends ComponentType = typeof View>({
  as,
  text,
  icon,
  iconStyle,
  textStyle,
  color,
  size,
  ...restProps
}: PolymorhpicProps<C>) => {
  const Component = as || View;
  return (
    <Component {...restProps} style={[styles.container, restProps.style]}>
      <Ionicons name={icon} size={size || 24} color={color} style={iconStyle} />
      <Text style={[styles.text, { color }, textStyle]}>{text}</Text>
    </Component>
  );
};

export default IconText;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  text: {
    fontFamily: Styles.Fonts.normal,
  },
});
