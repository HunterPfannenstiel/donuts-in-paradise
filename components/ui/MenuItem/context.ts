import { createContext, useContext } from "react";
import { MenuItem } from "types";

export const Item = createContext<MenuItem>({ image: "", price: "", name: "" });

export const useItem = () => useContext(Item);
