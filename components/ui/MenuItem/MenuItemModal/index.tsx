import { ItemExtras } from "@_types/menu";
import { useMenu } from "@store/menu";
import Modal, { ModalComponentProps } from "@ui/Modal";
import { FunctionComponent, useMemo } from "react";
import { StyleSheet } from "react-native";
import MenuModalButton from "./MenuModalButton";
import SelectInputList from "@ui/Input/SelectInputList";
import useMenuItemSelections from "@hooks/useMenuItemSelections";
import Title from "@ui/Title";
import { useCart } from "@store/cart";
import { CartItemExtra, ItemGroupDetails } from "@_types/cart";
import NumberLabel from "@ui/Input/NumberLabel";

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
  const { addItemFromItemPage, modifyItemFromCheckout, findByCartItemId } =
    useCart();
  const { findItem } = useMenu();
  let item = findItem(category, itemId);
  let { amount, initExtras } = useMemo(() => {
    if (cartItemId !== undefined) {
      const cartItem = findByCartItemId(itemId, cartItemId);
      return { amount: cartItem.amount, initExtras: cartItem.extras };
    } else {
      return { amount: 1, initExtras: getInitialExtras(item.extraCategories) };
    }
  }, [cartItemId, itemId]);

  const { updateSelection, getSelections, updateAmount } =
    useMenuItemSelections(amount, initExtras);

  const submitHandler = () => {
    const { amount, extras } = getSelections();
    const newItem = { id: itemId, extras, amount };
    if (cartItemId === undefined) {
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
          category,
        },
        groupDetails
      );
    } else {
      modifyItemFromCheckout(cartItemId, newItem);
    }
    restProps.handleModal();
  };
  return (
    <Modal style={[styles.container, style]} {...restProps}>
      <Title>{item.name}</Title>
      {item.extraCategories?.map(({ category, extras }) => {
        return (
          <>
            <Title>{category}</Title>
            <SelectInputList
              initialIds={initExtras?.map((extra) => extra.id)}
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
      <NumberLabel
        label="Amount"
        initialNumber={amount}
        onChange={updateAmount}
      />
      <MenuModalButton
        type={cartItemId ? "Modify" : "Add"}
        onPress={submitHandler}
      />
    </Modal>
  );
};

const getInitialExtras = (categories: ItemExtras[] | null) => {
  if (!categories) return [];
  const initialExtras: CartItemExtra[] = [];
  categories.forEach(({ category, extras }) => {
    const { id, name, price } = extras[0];
    const extra = { id, name, price: price ? +price : undefined, category };
    initialExtras.push(extra);
  });
  return initialExtras;
};

export default MenuItemModal;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  input: {
    flex: 1,
  },
});
