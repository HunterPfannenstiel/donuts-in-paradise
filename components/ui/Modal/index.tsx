import { ComponentPropsWithoutRef, FunctionComponent, ReactNode } from "react";
import {
  Modal as NativeModal,
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export type ModalComponentProps<Props = {}> = Omit<
  ComponentPropsWithoutRef<typeof NativeModal>,
  keyof (ModalProps & Props)
> &
  ModalProps &
  Props;

interface ModalProps {
  handleModal: () => void;
}

const Modal: FunctionComponent<
  ModalComponentProps & { children: ReactNode }
> = ({
  handleModal,
  children,
  style,
  animationType = "slide",
  ...restProps
}) => {
  return (
    <NativeModal
      style={[styles.container, style]}
      animationType={animationType}
      {...restProps}
    >
      <SafeAreaView>
        <View style={styles.closeButtonContainer}>
          <Ionicons name="close" size={24} onPress={handleModal} />
        </View>
        {children}
      </SafeAreaView>
    </NativeModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    margin: 24,
  },
  closeButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 12,
  },
});
