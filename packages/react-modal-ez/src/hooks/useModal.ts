import { ReactNode, useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";
import { ModalOptions } from "../types";

export const useModal = () => {
  const context = useContext(ModalContext);

  if (context == null) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  const { isOpen, handleOpen, handleClose, setModal } = context;

  const open = (element: ReactNode, options?: ModalOptions) => {
    setModal({ element, options: options || {} });
    handleOpen();
  };

  return { isOpen, open, close: handleClose };
};
