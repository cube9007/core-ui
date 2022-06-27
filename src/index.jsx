import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// MUI theme
import { ThemeProvider } from "@mui/material/styles";
import { DefaultTheme } from "./ThemeConfig";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
