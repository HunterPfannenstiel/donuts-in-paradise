import { FunctionComponent } from "react";
import { StyleSheet, Image, ImageSourcePropType } from "react-native";
import { useItem } from "./context";

interface MenuItemImageProps {}

const MenuItemImage: FunctionComponent<MenuItemImageProps> = () => {
  const { image } = useItem();
  return <Image source={{ uri: image }} style={styles.image} />;
};

export default MenuItemImage;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.5,
    resizeMode: "cover",
  },
});
