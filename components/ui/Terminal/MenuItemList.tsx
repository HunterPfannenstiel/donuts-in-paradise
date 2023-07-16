import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import Grid from "../Grid";
import { MenuItem } from "../../../types";
import Item from "./Item";

interface MenuItemListProps {
  menuItems: MenuItem[];
}

const MenuItemList: FunctionComponent<MenuItemListProps> = ({ menuItems }) => {
  return (
    <Grid>
      {menuItems.map((item, i) => {
        return <Item item={item} key={i} />;
      })}
    </Grid>
  );
};

export default MenuItemList;

const styles = StyleSheet.create({
  container: {},
});
