import { recipe } from "@vanilla-extract/recipes";

export const buttonStyle = recipe({
  base: {
    width: "fit-content",
    padding: "10px 12px",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    fontSize: 16,
    lineHeight: "20px",

    ":hover": {
      opacity: 0.8,
    },
    ":active": {
      opacity: 0.5,
    },
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "black",
        color: "white",
      },
      secondary: {
        backgroundColor: "grau",
        color: "black",
      },
    },
  },
});
