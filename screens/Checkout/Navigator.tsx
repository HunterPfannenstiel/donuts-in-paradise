import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FunctionComponent } from "react";
import { Pressable } from "react-native";
import Checkout from ".";
import CashCheckout from "./CashCheckout";
import CardCheckout from "./CardCheckout";
import { HomeScreenNavigationProp } from "@screens/types";
import IconText from "@ui/IconText";
import { CheckoutStackParamList } from "./RouteTypes";
import { useCart } from "@store/cart";
import EndScreen from "./EndScreen";

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
            text="Back To Terminal"
          />
        ),
      }}
    >
      <CheckoutStack.Screen
        name="CheckoutHome"
        component={Checkout}
        options={{ title: "Summary" }}
      />
      <CheckoutStack.Screen
        name="CashCheckout"
        component={CashCheckout}
        options={{ title: `Total: $${price.toFixed(2)}` }}
      />
      <CheckoutStack.Screen name="CardCheckout" component={CardCheckout} />
      <CheckoutStack.Screen name="EndScreen" component={EndScreen} />
    </CheckoutStack.Navigator>
  );
};

export default CheckoutNavigator;
