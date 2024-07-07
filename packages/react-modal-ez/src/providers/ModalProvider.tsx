import { createContext, PropsWithChildren, useState } from "react";
import { Controller } from "../components/Controller";
import { ModalContextType, ModalProps } from "../types";

export const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState<ModalProps | null>(null);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setModal(null);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, modal, handleOpen, handleClose, setModal }}
    >
      {children}

      {isOpen && modal && (
        <Controller handleClose={handleClose} {...modal.options}>
          {modal.element}
        </Controller>
      )}
    </ModalContext.Provider>
  );
}
