import { FunctionComponent } from "react";
import { StyleSheet, View, Text } from "react-native";

interface AdminProps {}

const Admin: FunctionComponent<AdminProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Admin</Text>
    </View>
  );
};

export default Admin;

const styles = StyleSheet.create({
  container: {},
});
