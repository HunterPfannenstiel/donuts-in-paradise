import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Admin, Home, Kiosk, Terminal } from "./screens";
import CartProvider from "./store/cart";
import usePrepareApplication from "./components/hooks/usePrepareApplication";

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, onLayoutRootView] = usePrepareApplication();

  if (!appIsReady) return null;
  return (
    <CartProvider>
      <NavigationContainer onReady={onLayoutRootView}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Admin" component={Admin} />
          <Stack.Screen name="Terminal" component={Terminal} />
          <Stack.Screen name="Kiosk" component={Kiosk} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
