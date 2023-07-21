import { FunctionComponent } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

interface KioskProps {}

const Kiosk: FunctionComponent<KioskProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Kiosk</Text>
      <Button title="eee" />
    </View>
  );
};

export default Kiosk;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
