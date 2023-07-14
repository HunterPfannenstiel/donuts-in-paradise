import { FunctionComponent } from "react";
import { StyleSheet, View, Text } from "react-native";

interface TerminalProps {}

const Terminal: FunctionComponent<TerminalProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Terminal</Text>
    </View>
  );
};

export default Terminal;

const styles = StyleSheet.create({
  container: {},
});
