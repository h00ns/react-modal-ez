"use client";

import { PropsWithChildren } from "react";
import { ModalProvider } from "react-modal-ez";

export default function MyModalProvider({ children }: PropsWithChildren) {
  return <ModalProvider>{children}</ModalProvider>;
}
