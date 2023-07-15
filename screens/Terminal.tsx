import Item from "../components/ui/Terminal/Item";
import { FunctionComponent } from "react";
import { StyleSheet, View, Text } from "react-native";

interface TerminalProps {}

const Terminal: FunctionComponent<TerminalProps> = () => {
  return (
    <View style={styles.container}>
      <Item />
    </View>
  );
};

export default Terminal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
