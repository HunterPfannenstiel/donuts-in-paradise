import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "@ui/Title";

interface ModalHeaderProps {
  handleModal: () => void;
  title?: string;
}

const ModalHeader: FunctionComponent<ModalHeaderProps> = ({
  handleModal,
  title,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ width: 36 }} />
      {title && <Title fontSize={36}>{title}</Title>}
      <Ionicons name="close" size={36} onPress={handleModal} />
    </View>
  );
};

export default ModalHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
});
