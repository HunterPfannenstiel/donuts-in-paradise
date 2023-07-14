import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FunctionComponent } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { RootStackParamList } from "./types";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ route, navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("Admin");
        }}
      >
        <View>
          <Text>Admin</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Terminal");
        }}
      >
        <View>
          <Text>Terminal</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Kiosk");
        }}
      >
        <View>
          <Text>Kiosk</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 24,
  },
});
