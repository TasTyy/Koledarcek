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
    background: "#F6FEF3",
    primary: "#4FE52F",
    secondary: "#79EEE9",
    accent: "#4BBAE9",
    primaryText: "#071E04",
    secondaryText: "#687865",
  },
};
