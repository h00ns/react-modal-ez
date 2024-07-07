import { style } from "@vanilla-extract/css";

export const myModalStyle = style({
  padding: 24,
  background: "white",
  borderRadius: 8,
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  width: "320px",

  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const buttonWrapStyle = style({
  display: "flex",
  justifyContent: "flex-end",
});
