import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: any;
  Admin: undefined;
  Terminal: undefined;
  Kiosk: undefined;
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
