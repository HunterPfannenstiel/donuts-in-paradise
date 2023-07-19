import { FunctionComponent, ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface RowContainerProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const RowContainer: FunctionComponent<RowContainerProps> = ({
  children,
  style,
}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default RowContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    padding: 16,
    alignItems: "center",
  },
});
