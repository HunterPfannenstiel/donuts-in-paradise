import { useState } from "react";

export type SelectionId = number | string;

export type Selections = { [id: SelectionId]: boolean };

const useSelections = (
  mode: "checkbox" | "radio",
  initialIds?: SelectionId[]
) => {
  const [selections, setSelections] = useState(idToSelections(initialIds));

  const onSelect = (id: SelectionId) => {
    if (mode === "checkbox") {
      setSelections((prevSelections) => ({
        ...prevSelections,
        [id]: !!!prevSelections[id],
      }));
    } else {
      setSelections({ [id]: true });
    }
  };
  return [selections, onSelect] as [Selections, (id: SelectionId) => void];
};

export default useSelections;

const idToSelections = (ids?: SelectionId[]) => {
  const selections: Selections = {};
  ids?.forEach((id) => {
    selections[id] = true;
  });
  return selections;
};
