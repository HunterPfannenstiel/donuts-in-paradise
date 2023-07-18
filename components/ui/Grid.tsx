import { FunctionComponent, ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { PolymorphicComponent } from "types/polymorphic";

interface GridProps {
  gap?: number;
  children: ReactNode;
}

const Grid = <C extends typeof View | typeof ScrollView = typeof View>({
  as,
  gap,
  children,
}: { as?: C } & GridProps) => {
  const userStyle = gap ? { gap, padding: gap } : undefined;
  const Component = as || View;
  const styleProps = {} as { [key: string]: any };
  if (Component === ScrollView) {
    styleProps["contentContainerStyle"] = [styles.container, userStyle];
  } else {
    styleProps["style"] = [styles.container, userStyle];
  }
  return <Component {...styleProps}>{children}</Component>;
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
