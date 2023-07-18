import { StyleProp, ViewStyle, TextStyle } from "react-native";

export const appendStyles = <T extends ViewStyle | TextStyle>(
  ...styles: {
    style: keyof StyleProp<T>;
    val: StyleProp<T>[keyof StyleProp<T>];
  }[]
) => {
  const styleObj: StyleProp<T> = {};
  styles.forEach(({ style, val }) => {
    if (style) styleObj![style] = val;
  });
};
