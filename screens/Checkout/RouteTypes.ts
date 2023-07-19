import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type CheckoutStackParamList = {
  CheckoutHome: undefined;
  CashCheckout: undefined;
  CardCheckout: undefined;
  EndScreen: undefined;
};

export type CheckoutScreenNavigationProp =
  NativeStackNavigationProp<CheckoutStackParamList>;
