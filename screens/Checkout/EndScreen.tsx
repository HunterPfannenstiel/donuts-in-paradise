import Title from "@ui/Title";
import { FunctionComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
import { CheckoutScreenComponent } from "@screens/Checkout/RouteTypes";
import { Styles } from "@constants/styles";
import EndScreenButtons from "@ui/Checkout/EndScreen/EndScreenButtons";
import { useCart } from "@store/cart";
import { getDatabaseCart } from "@store/cart/utils";
import ServerRequest from "@custom-objects/Fetch/ServerRequest";
import { OrderDetails } from "@_types/cart";

interface EndScreenProps extends CheckoutScreenComponent<"EndScreen"> {}

const EndScreen: FunctionComponent<EndScreenProps> = ({
  route,
  navigation,
}) => {
  const { params } = route;
  const { deleteCart, cart } = useCart();
  const completeOrderHandler = async () => {
    const items = getDatabaseCart(cart);
    const order: OrderDetails = {
      name: params.name,
      total: cart.price.toFixed(2),
      paymentType: "cash",
      items,
    };
    const res = await ServerRequest.request("/order", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "Content-Type": "application/json" },
    });
    if (!res.success) {
      console.log(res.errorMessage);
      return;
    }
    deleteCart();
    navigation.navigate("Terminal");
  };
  return (
    <View style={styles.container}>
      {params?.change ? (
        <Title textAlign="center">
          Change Owed: ${params.change.toFixed(2)}
        </Title>
      ) : null}
      <Text style={styles.text}>Order For: {params.name}</Text>
      <EndScreenButtons completeOrderHandler={completeOrderHandler} />
    </View>
  );
};

export default EndScreen;

const styles = StyleSheet.create({
  container: { flex: 1, gap: 36, paddingTop: 24, alignItems: "center" },
  text: {
    fontFamily: Styles.Fonts.normal,
    fontSize: 24,
  },
});
