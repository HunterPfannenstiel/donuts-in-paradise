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
  const { amount, updateSelection, getItemExtras } = useMenuItemSelections();
  const { findItem } = useMenu();
  let item: MenuItem;
  item = findItem(category, itemId);

  const submitHandler = () => {
    console.log(getItemExtras());
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
        <NumberInput />
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
