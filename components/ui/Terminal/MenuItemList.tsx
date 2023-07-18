import { FunctionComponent, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import MenuItemModal from "@ui/MenuItem/MenuItemModal";
import useModal from "@hooks/useModal";
import { useMenu } from "@store/menu";
import { ActivityIndicator } from "react-native";
import MenuSection from "./MenuSection";

interface MenuItemListProps {}

const MenuItemList: FunctionComponent<MenuItemListProps> = () => {
  const { getModalProps, handleModal } = useModal();
  const [selectedItem, setSelectedItem] = useState<{
    category: string;
    itemId: number;
  }>();
  const handleItemClick = (category: string, itemId: number) => {
    setSelectedItem({ category, itemId });
    handleModal();
  };
  const { menu, isLoading, isError, error } = useMenu();
  if (isLoading) return <ActivityIndicator />;
  if (isError) return <Text>An error occurred</Text>;
  return (
    <>
      <ScrollView style={styles.container}>
        {menu!.map((menuSection) => {
          return (
            <MenuSection
              category={menuSection.category}
              items={menuSection.items}
              onItemClick={handleItemClick.bind(null, menuSection.category)}
            />
          );
        })}
      </ScrollView>
      <MenuItemModal {...getModalProps()} {...selectedItem} />
    </>
  );
};

export default MenuItemList;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
