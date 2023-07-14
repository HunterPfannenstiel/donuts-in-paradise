import { FunctionComponent } from "react";
import { StyleSheet, View, Text } from "react-native";

interface KioskProps {}

const Kiosk: FunctionComponent<KioskProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Kiosk</Text>
    </View>
  );
};

export default Kiosk;

const styles = StyleSheet.create({
  container: {},
});
