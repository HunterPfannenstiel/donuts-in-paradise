import { useState } from "react";

export type ModalProps = {
  visible: boolean;
  handleModal: () => void;
};

const executeFns =
  (...fns: ((() => void) | undefined)[]) =>
  () => {
    fns.forEach((fn) => fn && fn());
  };

const useModal = () => {
  const [visible, setVisible] = useState(false);

  const handleModal = () => {
    setVisible((prevState) => !prevState);
  };

  const getModalProps = ({
    onCloseModal,
    ...restProps
  }: { onCloseModal?: () => void; [key: string]: any } = {}) => {
    return {
      visible,
      handleModal: executeFns(handleModal, onCloseModal),
      ...restProps,
    };
  };

  return { handleModal, visible, getModalProps };
};

export default useModal;
