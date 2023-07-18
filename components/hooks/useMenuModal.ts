import { CartItemExtra } from "@_types/cart";
import { useState } from "react";

type ExtraSelections = { [category: string]: CartItemExtra };

const useMenuModal = (
  initialAmount?: number,
  initialExtras?: CartItemExtra[],
  cartItemId?: number
) => {
  const [amount, setAmount] = useState(initialAmount || 1);
  const [selectedExtras, setSelectedExtras] = useState(
    extrasToSelections(initialExtras)
  );
};

const extrasToSelections = (extras?: CartItemExtra[]) => {
  const selections: ExtraSelections = {};
  extras?.forEach((extra) => {
    selections[extra.category] = extra;
  });
  return selections;
};
