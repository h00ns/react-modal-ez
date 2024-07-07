import { typographyStyle } from "./Typography.css";
import { ElementType, forwardRef, HTMLAttributes, Ref } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  children: React.ReactNode;
  color?: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "sh1"
    | "sh2"
    | "sh3"
    | "sh4"
    | "sh5"
    | "b1"
    | "b2"
    | "b3"
    | "b4"
    | "b5"
    | "b6";
}

const _Typography = (
  {
    as = "p",
    children,
    color = "black",
    variant = "b4",
    ...htmlAttributes
  }: Props,
  ref: Ref<HTMLElement>
) => {
  const Element = as;

  return (
    <Element
      ref={ref}
      className={typographyStyle({ variant })}
      {...htmlAttributes}
      style={{ color, ...htmlAttributes.style }}
    >
      {children}
    </Element>
  );
};

export const Typography = forwardRef(_Typography);
