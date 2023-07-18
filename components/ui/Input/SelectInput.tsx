import { FunctionComponent } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

interface SelectInputProps {
  label: string;
  isSelected: boolean;

  onSelect: () => void;
}

const SelectInput: FunctionComponent<SelectInputProps> = ({
  label,
  isSelected,
  onSelect,
}) => {
  return (
    <Pressable style={styles.container}>
      <Text>{label}</Text>
    </Pressable>
  );
};

export default SelectInput;

const styles = StyleSheet.create({
  container: {},
});
