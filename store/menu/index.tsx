import { MenuSection } from "@_types/menu";
import { useQuery } from "@tanstack/react-query";

export const useMenu = () => {
  const { data, isLoading, isError, error } = useQuery(["menu"], {
    queryFn: fetchMenu,
    staleTime: Infinity,
  });

  const findItem = (category: string, id: number) => {
    const section = data!.find((section) => section.category === category)!;
    return section.items.find((item) => item.id === id)!;
  };
  return { menu: data, isLoading, isError, error, findItem };
};

export const fetchMenu = async () => {
  const menu: MenuSection[] = [
    {
      category: "Donuts",
      items: [
        {
          id: 1,
          imageUrl:
            "https://res.cloudinary.com/dwg1i9w2u/image/upload/v1673400244/item_images/fgvymicizcsmmwqgbgyh.png",
          price: "6.00",
          name: "Apple Cider",
          description:
            "Indulge in the irresistible delight of a freshly fried apple cider mini donut, with its warm, crispy exterior and delightful apple-infused sweetness.",
          extraCategories: [
            {
              category: "Size",
              extras: [
                { id: 1, name: "Small", price: null },
                { id: 2, name: "Large", price: "15.00" },
              ],
            },
          ],
          groupId: null,
        },
      ],
    },
    {
      category: "Drinks",
      items: [
        {
          id: 2,
          imageUrl:
            "https://cookingwithcarlee.com/wp-content/uploads/2021/07/glasses-of-pink-lemonade.jpg",
          price: "1.00",
          name: "Lemonade",
          description:
            "This lemonade is a classic, citrus-based beverage made from freshly squeezed lemons, water, and sweetener, offering a refreshing and tangy flavor.",
          extraCategories: [
            {
              category: "Flavor",
              extras: [
                { id: 3, name: "Regular", price: null },
                { id: 4, name: "Blueberry", price: null },
                { id: 5, name: "Strawberry", price: null },
              ],
            },
          ],
          groupId: null,
        },
      ],
    },
  ];
  return menu;
};
