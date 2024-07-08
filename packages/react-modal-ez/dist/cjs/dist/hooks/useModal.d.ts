import { ReactNode } from "react";
import { ModalOptions } from "../types";
export declare const useModal: () => {
    isOpen: boolean;
    open: (element: ReactNode, options?: ModalOptions) => void;
    close: () => void;
};
