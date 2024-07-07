import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ModalContextType {
  isOpen: boolean;
  modal: ModalProps | null;
  handleOpen: () => void;
  handleClose: () => void;
  setModal: Dispatch<SetStateAction<ModalProps | null>>;
}

export interface ModalProps {
  element: ReactNode;
  options: ModalOptions;
}

export interface ModalOptions {
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "left"
    | "center"
    | "right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  dimmed?: boolean;
  closeOnDimmedClick?: boolean;
  closeOnEscape?: boolean;
  scrollable?: boolean;
  dimmedClassName?: string;
  modalClassName?: string;
}
