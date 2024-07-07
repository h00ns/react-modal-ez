import { style } from "@vanilla-extract/css";

export const formStyle = style({
  width: 320,
  margin: "32px auto",

  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const rowStyle = style({
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "16px 1fr",
  gap: 8,
});

export const buttonWrapStyle = style({
  marginTop: 12,

  display: "flex",
  justifyContent: "center",
  gap: 8,
});
