import { FunctionComponent, useState } from "react";
import { StyleSheet } from "react-native";
import Grid from "../Grid";
import { MenuItem } from "@_types/index";
import Item from "./Item";
import MenuItemModal from "@ui/MenuItem/MenuItemModal";
import useModal from "@hooks/useModal";

interface MenuItemListProps {
  menuItems: MenuItem[];
}

const MenuItemList: FunctionComponent<MenuItemListProps> = ({ menuItems }) => {
  const { getModalProps, handleModal } = useModal();
  const [selectedItem, setSelectedItem] = useState<number>();
  return (
    <>
      <Grid>
        {menuItems.map((item, i) => {
          return (
            <Item
              item={item}
              key={item.id}
              onPress={() => {
                setSelectedItem(item.id);
                handleModal();
              }}
            />
          );
        })}
      </Grid>
      <MenuItemModal {...getModalProps()} itemId={selectedItem!} />
    </>
  );
};

export default MenuItemList;

const styles = StyleSheet.create({
  container: {},
});
