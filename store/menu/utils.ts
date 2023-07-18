import { MenuSection } from "@_types/menu";

export const filterByCategory = (menu: MenuSection[], category: string) => {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].category === category) return menu[i].items;
  }
  return [];
};
