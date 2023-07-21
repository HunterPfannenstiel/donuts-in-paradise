import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type CheckoutStackParamList = {
  CheckoutHome: undefined;
  CashCheckout: { name: string };
  CardCheckout: { name: string };
  CashEndScreen: { name: string; change: number };
  CardEndScreen: { name: string };
};

export type CheckoutScreenNavigationProp =
  NativeStackNavigationProp<CheckoutStackParamList>;

export type CheckoutScreenComponent<T extends keyof CheckoutStackParamList> =
  NativeStackScreenProps<CheckoutStackParamList, T>;
