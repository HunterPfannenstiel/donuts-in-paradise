import useSelections, { SelectionId } from "@hooks/useSelections";
import { Fragment, ReactNode, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import Radio from "./Radio";
import Grid from "@ui/Grid";
import InputButton from "./InputButton";
import Checkbox from "./Checkbox";

type SelectInputListProps<T, U extends SelectionId> =
  | {
      mode: "checkbox" | "radio";
      options: T[];
      onSelect: (id: U, option: T) => void;
      extractor: (item: T) => { key: U; label: string };
      keyExtractor?: undefined;
      componentExtractor?: undefined;
      initialIds?: U[];
    }
  | {
      mode: "checkbox" | "radio";
      options: T[];
      onSelect: (id: U, option: T) => void;
      extractor?: undefined;
      keyExtractor: (item: T) => U;
      componentExtractor: (item: T, isSelected: boolean) => ReactNode;
      initialIds?: U[];
    };

const SelectInputList = <T, U extends SelectionId>({
  mode,
  options,
  onSelect,
  extractor,
  keyExtractor,
  componentExtractor,
  initialIds,
}: SelectInputListProps<T, U>) => {
  const [selections, setSelections] = useSelections(mode, initialIds);
  const selectedHandler = (id: U, option: T) => {
    setSelections(id);
    onSelect(id, option);
  };
  return (
    <Grid>
      {options.map((option) => {
        if (extractor) {
          const { key, label } = extractor(option);
          const isSelected = selections[key];
          return (
            <InputButton
              label={label}
              key={key}
              onPress={selectedHandler.bind(null, key, option)}
            >
              {mode === "radio" ? (
                <Radio isSelected={isSelected} />
              ) : (
                <Checkbox isSelected={isSelected} />
              )}
            </InputButton>
          );
        } else {
          const key = keyExtractor(option);
          return (
            <Fragment key={key}>
              {componentExtractor(option, selections[key])}
            </Fragment>
          );
        }
      })}
    </Grid>
  );
};

export default SelectInputList;

const styles = StyleSheet.create({
  container: {},
});
