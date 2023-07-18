import { MenuItem } from "@_types/menu";
import Grid from "@ui/Grid";
import { FunctionComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
import Item from "../Item";
import { Styles } from "@constants/styles";

interface MenuSectionProps {
  category: string;
  items: MenuItem[];
  onItemClick: (id: number) => void;
}

const MenuSection: FunctionComponent<MenuSectionProps> = ({
  category,
  items,
  onItemClick,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryText}>{category}</Text>
      <Grid>
        {items.map((item) => {
          return (
            <Item
              item={{
                id: item.id,
                name: item.name,
                image: item.imageUrl,
                price: item.price,
              }}
              key={item.id}
              onPress={onItemClick.bind(null, item.id)}
            />
          );
        })}
      </Grid>
    </View>
  );
};

export default MenuSection;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  categoryText: {
    fontSize: 24,
    fontFamily: Styles.Fonts.normal,
    fontWeight: "bold",
  },
});
