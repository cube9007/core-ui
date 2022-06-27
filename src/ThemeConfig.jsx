import { createTheme as createMuiTheme } from "@mui/material/styles";

export const DefaultTheme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto"',
  },
  button: {
    fontSize: "inherit",
  },
  palette: {
    primary: {
      main: "#162DFB",
    },
    secondary: {
      main: "#353535",
    },
    black: {
      main: "#000",
      dark: "#222",
      contrastText: "#fff",
    },
    grey: {
      main: "rgb(0,0,0,0.6)",
      dark: "rgb(0,0,0,0.4)",
      contrastText: "rgb(0,0,0,0.2)",
    }
  }
});

