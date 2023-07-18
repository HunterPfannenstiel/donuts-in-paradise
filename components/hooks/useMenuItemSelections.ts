import { CartItemExtra } from "@_types/cart";
import { useRef, useState } from "react";

type ExtraSelections = { [category: string]: CartItemExtra };

const useMenuItemSelections = (
  initialAmount: number = 1,
  initialExtras?: CartItemExtra[]
) => {
  const [amount, setAmount] = useState(initialAmount);
  const selections = useRef(extrasToSelections(initialExtras));

  const updateAmount = (amount: number) => {
    setAmount(amount);
  };
  const updateSelection = (category: string, extra: CartItemExtra) => {
    selections.current[category] = extra;
  };

  const getItemExtras = () => {
    return Object.keys(selections.current).map((category) => {
      return selections.current[category];
    });
  };

  return { amount, updateAmount, updateSelection, getItemExtras };
};

export default useMenuItemSelections;

const extrasToSelections = (extras?: CartItemExtra[]) => {
  const selections: ExtraSelections = {};
  extras?.forEach((extra) => {
    selections[extra.category] = extra;
  });
  return selections;
};
