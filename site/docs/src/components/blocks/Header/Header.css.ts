import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  background: "black",
  padding: "120px 24px",
  textAlign: "center",
  color: "white",
});

export const linkWrapStyle = style({
  marginTop: 24,

  display: "flex",
  flexDirection: "column",
  gap: 8,
});
