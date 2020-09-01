import React from "react";
import Home from "./components/page/Home";
import { ThemeProvider } from "styled-components";

import * as theme from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
