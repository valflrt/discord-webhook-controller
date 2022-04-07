import React from "react";
import ReactDOM from "react-dom";

import Index from "./pages/Index";

import GlobalStyles from "./global.styles";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Index />
  </>,
  document.getElementById("root")
);
