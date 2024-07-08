import * as react_jsx_runtime from 'react/jsx-runtime';
import { PropsWithChildren, ReactNode } from 'react';

interface ModalOptions {
    position?: "top-left" | "top-center" | "top-right" | "left" | "center" | "right" | "bottom-left" | "bottom-center" | "bottom-right";
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

declare function ModalProvider({ children }: PropsWithChildren): react_jsx_runtime.JSX.Element;

declare const useModal: () => {
    isOpen: boolean;
    open: (element: ReactNode, options?: ModalOptions) => void;
    close: () => void;
};

export { ModalProvider, useModal };
