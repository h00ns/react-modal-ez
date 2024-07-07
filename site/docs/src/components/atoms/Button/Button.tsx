import { ForwardedRef, forwardRef, HTMLAttributes } from "react";
import { buttonStyle } from "./Button.css";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  text: string;
}

const _Button = (
  { variant = "primary", text, ...htmlAttributes }: Props,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <button className={buttonStyle({ variant })} ref={ref} {...htmlAttributes}>
      {text}
    </button>
  );
};

export const Button = forwardRef(_Button);
