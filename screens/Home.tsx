import { ScrollView } from "react-native";
import HomeNavButton from "@ui/Home/HomeNavButton";
import { DeviceSizes, Styles } from "@constants/styles";
import { useWindowDimensions } from "react-native";

const Home = () => {
  const { width } = useWindowDimensions();
  const flexDirection = width <= DeviceSizes.Small ? "column" : "row";

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection,
        flexGrow: 1,
      }}
      horizontal={flexDirection === "row"}
    >
      <HomeNavButton
        screenName="Admin"
        text="Admin"
        icon="lock-closed"
        backgroundColor={Styles.Colors.logoBlue}
      />
      <HomeNavButton
        screenName="Terminal"
        text="Terminal"
        icon="terminal"
        backgroundColor={Styles.Colors.logoPurple}
      />
      <HomeNavButton
        screenName="Kiosk"
        text="Kiosk"
        icon="cart"
        backgroundColor={Styles.Colors.logoYellow}
      />
    </ScrollView>
  );
};

export default Home;
