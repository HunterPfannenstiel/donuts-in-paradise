export type ItemExtra = {
  id: number;
  name: string;
  price?: string | null;
};

export type ItemExtras = {
  category: string;
  extras: ItemExtra[];
};

export type DisplayMenuItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: string;
};

type MenuItemGroupDetails =
  | {
      groupId: null;
    }
  | {
      groupId: number;
      groupPrice: string;
      groupSize: number;
    };

export type MenuItem = {
  description: string;
  extraCategories: ItemExtras[] | null;
} & DisplayMenuItem &
  MenuItemGroupDetails;

export type MenuSection = {
  category: string;
  items: MenuItem[];
};
