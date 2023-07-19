import { MenuItem } from "@_types/menu";
import { useMenu } from "@store/menu";
import Modal, { ModalComponentProps } from "@ui/Modal";
import { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuModalButton from "./MenuModalButton";
import SelectInputList from "@ui/Input/SelectInputList";
import useMenuItemSelections from "@hooks/useMenuItemSelections";
import Title from "@ui/Title";
import NumberInput from "@ui/Input/NumberInput";
import { useCart } from "@store/cart";
import { ItemGroupDetails } from "@_types/cart";

type MenuItemModalProps = {
  category?: string;
  itemId?: number;
  cartItemId?: number;
};

const MenuItemModal: FunctionComponent<
  ModalComponentProps<MenuItemModalProps>
> = ({ category, itemId, cartItemId, style, ...restProps }) => {
  if (!category || !itemId) {
    return null;
  }
  const { updateSelection, getSelections, updateAmount } =
    useMenuItemSelections();
  const { findItem } = useMenu();
  const { addItemFromItemPage, modifyItemFromCheckout } = useCart();
  let item: MenuItem;
  item = findItem(category, itemId);

  const submitHandler = () => {
    const { amount, extras } = getSelections();
    const newItem = { id: itemId, extras, amount };
    if (!cartItemId) {
      let groupDetails: ItemGroupDetails | undefined = undefined;
      if (item.groupId) {
        groupDetails = {
          id: item.groupId,
          size: item.groupSize,
          price: +item.groupPrice,
          currentItemCount: 0,
        };
      }
      addItemFromItemPage(
        newItem,
        {
          id: itemId,
          price: +item.price,
          imageUrl: item.imageUrl,
          groupId: item.groupId !== null ? item.groupId : undefined,
          name: item.name,
        },
        groupDetails
      );
    } else {
      modifyItemFromCheckout(cartItemId, newItem);
    }
  };
  return (
    <Modal style={[styles.container, style]} {...restProps}>
      <Title>{item.name}</Title>
      {item.extraCategories?.map(({ category, extras }) => {
        return (
          <>
            <Title>{category}</Title>
            <SelectInputList
              options={extras}
              extractor={(extra) => ({ key: extra.id, label: extra.name })}
              onSelect={(_, { id, name, price }) => {
                updateSelection(category, {
                  id,
                  name,
                  category,
                  price: price ? +price : null,
                });
              }}
              mode="radio"
            />
          </>
        );
      })}
      <View>
        <Text>Amount</Text>
        <NumberInput onChange={updateAmount} />
      </View>
      <MenuModalButton
        type={cartItemId ? "Modify" : "Add"}
        onPress={submitHandler}
      />
    </Modal>
  );
};

export default MenuItemModal;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
});
