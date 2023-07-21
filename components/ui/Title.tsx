import { Styles } from "@constants/styles";
import { FunctionComponent, ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

interface TitleProps {
  children: ReactNode;
  fontSize?: number;
  fontFamily?: string;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
}

const Title: FunctionComponent<TitleProps> = ({
  children,
  fontSize = 24,
  fontFamily = Styles.Fonts.normal,
  textAlign,
}) => {
  return (
    <Text style={[styles.title, { fontSize, fontFamily, textAlign }]}>
      {children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
});
