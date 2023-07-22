import Title from "@ui/Title";
import { FunctionComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
import { CheckoutScreenComponent } from "@screens/Checkout/RouteTypes";
import { Styles } from "@constants/styles";
import { useRoute } from "@react-navigation/native";
import EndScreenButtons from "@ui/Checkout/EndScreen/EndScreenButtons";

interface EndScreenProps {}

const EndScreen: FunctionComponent<EndScreenProps> = ({}) => {
  const { params } = useRoute<CheckoutScreenComponent<"EndScreen">["route"]>();
  return (
    <View style={styles.container}>
      {params?.change ? (
        <Title textAlign="center">
          Change Owed: ${params.change.toFixed(2)}
        </Title>
      ) : null}
      <Text style={styles.text}>Order For: {params.name}</Text>
      <EndScreenButtons />
    </View>
  );
};

export default EndScreen;

const styles = StyleSheet.create({
  container: { flex: 1, gap: 36, paddingTop: 24, alignItems: "center" },
  text: {
    fontFamily: Styles.Fonts.normal,
    fontSize: 24,
  },
});
