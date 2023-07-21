import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "@screens/types";

export type CheckoutStackParamList = {
  CheckoutHome: undefined;
  CashCheckout: { name: string };
  CardCheckout: { name: string };
  CashEndScreen: { name: string; change: number };
  CardEndScreen: { name: string };
} & RootStackParamList;

export type CheckoutScreenNavigationProp =
  NativeStackNavigationProp<CheckoutStackParamList>;

export type CheckoutScreenComponent<T extends keyof CheckoutStackParamList> =
  NativeStackScreenProps<CheckoutStackParamList, T>;
