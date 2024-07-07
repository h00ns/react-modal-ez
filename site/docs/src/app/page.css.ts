import { style } from "@vanilla-extract/css";

export const pageStyle = style({
  minHeight: "100vh",

  display: "flex",
  flexDirection: "column",
});

export const contentStyle = style({
  width: "100%",
  maxWidth: 1024,
  padding: "96px 24px",
  margin: "0 auto",

  display: "flex",
  flexDirection: "column",
  gap: 32,
});
