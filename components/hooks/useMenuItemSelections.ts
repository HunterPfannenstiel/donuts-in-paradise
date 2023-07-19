import { CartItemExtra } from "@_types/cart";
import { useRef, useState } from "react";

type ExtraSelections = { [category: string]: CartItemExtra };

const useMenuItemSelections = (
  initialAmount: number = 1,
  initialExtras?: CartItemExtra[]
) => {
  const amount = useRef(initialAmount);
  const selections = useRef(extrasToSelections(initialExtras));

  const updateAmount = (newAmount: number) => {
    amount.current = newAmount;
  };
  const updateSelection = (category: string, extra: CartItemExtra) => {
    selections.current[category] = extra;
  };

  const getSelections = () => {
    const extras = Object.keys(selections.current).map((category) => {
      return selections.current[category];
    });
    return { extras, amount: amount.current };
  };

  return { amount, updateAmount, updateSelection, getSelections };
};

export default useMenuItemSelections;

const extrasToSelections = (extras?: CartItemExtra[]) => {
  const selections: ExtraSelections = {};
  extras?.forEach((extra) => {
    selections[extra.category] = extra;
  });
  return selections;
};
