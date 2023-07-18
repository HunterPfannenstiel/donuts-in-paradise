import { Styles } from "@constants/styles";
import IconText from "@ui/IconText";
import { FunctionComponent } from "react";
import { Pressable, StyleSheet, View } from "react-native";

interface MenuModalButtonProps {
  type: "Add" | "Modify";
  onPress: () => void;
}

const MenuModalButton: FunctionComponent<MenuModalButtonProps> = ({
  type,
  onPress,
}) => {
  const icon = type === "Add" ? "add-circle" : "restaurant-sharp";
  return (
    <IconText
      as={Pressable}
      onPress={onPress}
      icon={icon}
      text={type}
      style={styles.button}
      textStyle={styles.buttonText}
    />
  );
};

export default MenuModalButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: "200%",
    width: "100%",
    padding: 24,
    backgroundColor: Styles.Colors.logoBlue,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
