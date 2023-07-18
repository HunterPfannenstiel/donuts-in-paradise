import TerminalCart from "@ui/TerminalCart";
import MenuItemList from "@ui/Terminal/MenuItemList";
import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";

interface TerminalProps {}

const Terminal: FunctionComponent<TerminalProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <MenuItemList />
        <TerminalCart />
      </View>
    </View>
  );
};

export default Terminal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    flex: 1,
  },
});
