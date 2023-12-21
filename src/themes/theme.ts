interface Colors {
  background: string;
  primary: string;
  secondary: string;
  accent: string;
  primaryText: string;
  secondaryText: string;
}

export interface MyTheme {
  breakpoint: string;
  colors: Colors;
}

export const theme: MyTheme = {
  breakpoint: "1024px",
  colors: {
    background: "#050115",
    primary: "#7E6EF8",
    secondary: "#800799",
    accent: "#F41BDD",
    primaryText: "#DFDCFD",
    secondaryText: "#9c99b6",
  },
};

export default theme;
