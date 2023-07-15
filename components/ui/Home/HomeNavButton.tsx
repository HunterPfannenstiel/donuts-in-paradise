import { FunctionComponent } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import IconText from "../IconText";
import { useNavigation } from "@react-navigation/native";
import {
  HomeScreenNavigationProp,
  RootStackParamList,
} from "../../../screens/types";
import { Styles } from "../../../constants/styles";

interface HomeNavButtonProps {
  screenName: keyof RootStackParamList;
  text: string;
  backgroundColor: string;
  icon: keyof typeof Ionicons.glyphMap;
  textColor?: string;
}

const HomeNavButton: FunctionComponent<HomeNavButtonProps> = ({
  screenName,
  text,
  backgroundColor,
  icon,
  textColor,
}) => {
  const { navigate } = useNavigation<HomeScreenNavigationProp>();
  const handlePress = () => {
    navigate(screenName);
  };
  return (
    <Pressable
      style={[styles.container, { backgroundColor }]}
      onPress={handlePress}
    >
      <IconText
        text={text}
        icon={icon}
        color={textColor}
        textStyle={styles.text}
      />
    </Pressable>
  );
};

export default HomeNavButton;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Styles.BorderRadius.lg,
  },
  text: {
    fontSize: 24,
  },
});
