import { createContext, useContext } from "react";

export type ItemType = { image: string; price?: string; name: string };

export const Item = createContext<ItemType>({ image: "", price: "", name: "" });

export const useItem = () => useContext(Item);
