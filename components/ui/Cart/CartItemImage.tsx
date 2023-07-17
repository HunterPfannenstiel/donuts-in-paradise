import { FunctionComponent } from "react";
import { Image, StyleSheet } from "react-native";
import { useCartItem } from "./context";
import { Styles } from "@constants/styles";

interface CartItemImageProps {}

const CartItemImage: FunctionComponent<CartItemImageProps> = () => {
  const { imageUrl } = useCartItem();
  return <Image source={{ uri: imageUrl }} style={styles.image} />;
};

export default CartItemImage;

const styles = StyleSheet.create({
  image: {
    height: "80%",
    width: undefined,
    aspectRatio: 1,
    backgroundColor: Styles.Colors.logoBlue,
  },
});
