import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Admin, Home, Kiosk, Terminal } from "./screens";
import CartProvider from "./store/cart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import usePrepareApplication from "./components/hooks/usePrepareApplication";
import CheckoutNavigator from "./screens/Checkout/Navigator";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  const [appIsReady, onLayoutRootView] = usePrepareApplication();

  if (!appIsReady) return null;
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <NavigationContainer onReady={onLayoutRootView}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Admin" component={Admin} />
            <Stack.Screen name="Terminal" component={Terminal} />
            <Stack.Screen name="Kiosk" component={Kiosk} />
            <Stack.Screen
              name="Checkout"
              component={CheckoutNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </QueryClientProvider>
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
