import { ModalOptions } from "../types";
interface ContollerProps extends ModalOptions {
    children: React.ReactNode;
    handleClose: () => void;
}
export declare function Controller({ children, position, top, bottom, left, right, dimmed, closeOnDimmedClick, closeOnEscape, scrollable, modalClassName, dimmedClassName, handleClose, }: ContollerProps): import("react/jsx-runtime").JSX.Element;
export {};
