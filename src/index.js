import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import Schwurbler from "./Schwurbler";

const customTheme = {
  ...theme,
  radii: {
    ...theme.radii,
    lg: "18px",
    md: "18px",
    sm: "8px"
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Schwurbler />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
