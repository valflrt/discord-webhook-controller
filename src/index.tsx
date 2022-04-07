import React from "react";
import ReactDOM from "react-dom";

import Index from "./pages/Main";

import GlobalStyles from "./global.styles";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Index />
  </>,
  document.getElementById("root")
);
