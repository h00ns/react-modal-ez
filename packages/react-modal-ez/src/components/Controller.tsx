import { CSSProperties, useRef } from "react";
import { ModalOptions } from "../types";
import { useEscDown, useDimmedClick, useScrollLock } from "./Controller.hooks";
import css from "./Controller.module.css";

interface ContollerProps extends ModalOptions {
  children: React.ReactNode;
  handleClose: () => void;
}

export function Controller({
  children,
  position = "center",
  top,
  bottom,
  left,
  right,
  dimmed = true,
  closeOnDimmedClick = true,
  closeOnEscape = true,
  scrollable = false,
  modalClassName,
  dimmedClassName,
  handleClose,
}: ContollerProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useDimmedClick(modalRef, handleClose, dimmed && closeOnDimmedClick);
  useEscDown(handleClose, closeOnEscape);
  useScrollLock(!scrollable);

  const positionCss = position ? css[`position-${position}`] : null;

  const style: CSSProperties = {
    top,
    bottom,
    left,
    right,
  };

  if (dimmed) {
    return (
      <div className={`${css.dimmed} ${dimmedClassName}`}>
        <ModalWrap />
      </div>
    );
  }

  return <ModalWrap />;

  function ModalWrap() {
    return (
      <div
        ref={modalRef}
        className={`${css.modal} ${positionCss} ${modalClassName}`}
        style={style}
      >
        {children}
      </div>
    );
  }
}
