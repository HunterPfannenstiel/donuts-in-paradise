import { FunctionComponent, ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { PolymorphicComponent } from "types/polymorphic";

interface GridProps {
  gap?: number;
  children: ReactNode;
}

const Grid: FunctionComponent<GridProps> = ({ gap, children }) => {
  const userStyle = gap ? { gap, padding: gap } : undefined;
  return (
    <ScrollView contentContainerStyle={[styles.container, userStyle]}>
      {children}
    </ScrollView>
  );
};

export default Grid;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    gap: 16,
    padding: 16,
  },
});
