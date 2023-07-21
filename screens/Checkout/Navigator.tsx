import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FunctionComponent } from "react";
import { Pressable, StyleSheet } from "react-native";
import Checkout from ".";
import CashCheckout from "./CashCheckout";
import CardCheckout from "./CardCheckout";
import { HomeScreenNavigationProp } from "@screens/types";
import IconText from "@ui/IconText";
import { useCart } from "@store/cart";
import { CheckoutStackParamList } from "./RouteTypes";
import CashEndScreen from "./CashEndScreen";
import CardEndScreen from "./CardEndScreen";

const CheckoutStack = createNativeStackNavigator<CheckoutStackParamList>();

interface CheckoutNavigatorProps {
  navigation: HomeScreenNavigationProp;
}

const CheckoutNavigator: FunctionComponent<CheckoutNavigatorProps> = ({
  navigation,
}) => {
  const { price } = useCart().cart;
  return (
    <CheckoutStack.Navigator
      screenOptions={{
        headerRight: () => (
          <IconText
            as={Pressable}
            onPress={navigation.goBack}
            icon="close"
            text="Go Back"
          />
        ),
        title: `Total: $${price.toFixed(2)}`,
      }}
    >
      <CheckoutStack.Screen name="CheckoutHome" component={Checkout} />
      <CheckoutStack.Screen name="CashCheckout" component={CashCheckout} />
      <CheckoutStack.Screen name="CardCheckout" component={CardCheckout} />
      <CheckoutStack.Screen name="CashEndScreen" component={CashEndScreen} />
      <CheckoutStack.Screen name="CardEndScreen" component={CardEndScreen} />
    </CheckoutStack.Navigator>
  );
};

export default CheckoutNavigator;

const styles = StyleSheet.create({
  container: {},
});
