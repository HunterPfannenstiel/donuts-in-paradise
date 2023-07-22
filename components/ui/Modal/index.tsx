import { ComponentPropsWithoutRef, FunctionComponent, ReactNode } from "react";
import {
  Modal as NativeModal,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import ModalHeader from "./ModalHeader";
import { Styles } from "@constants/styles";
import { SafeAreaView } from "react-native-safe-area-context";

export type ModalComponentProps<Props = {}> = Omit<
  ComponentPropsWithoutRef<typeof NativeModal>,
  keyof (ModalProps & Props)
> &
  ModalProps &
  Props;

interface ModalProps {
  handleModal: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  title?: string;
}

const Modal: FunctionComponent<
  ModalComponentProps & { children: ReactNode }
> = ({
  handleModal,
  title,
  children,
  containerStyle,
  style,
  animationType = "slide",
  ...restProps
}) => {
  return (
    <View style={styles.container}>
      <NativeModal
        style={styles.modal}
        animationType={animationType}
        transparent={true}
        {...restProps}
      >
        <SafeAreaView style={styles.modal}>
          <View style={[styles.contentContainer, containerStyle]}>
            <View style={[styles.content, style]}>
              <ModalHeader handleModal={handleModal} title={title} />
              {children}
            </View>
          </View>
        </SafeAreaView>
        <View style={styles.background} />
      </NativeModal>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: { alignItems: "center", position: "relative" },
  modal: {
    flex: 1,
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  content: {
    flex: 1,
    width: "50%",
    height: "75%",
    padding: 24,
    backgroundColor: "white",
    borderRadius: Styles.BorderRadius.lg,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    zIndex: 1,
  },
  closeButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 12,
  },
  background: {
    top: 0,
    left: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: -1,
  },
});
