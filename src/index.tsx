import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Router from "./router/Router";

import GlobalStyles from "./global.styles";

ReactDOM.render(
  <HashRouter>
    <GlobalStyles />
    <Layout>
      <Router />
    </Layout>
  </HashRouter>,
  document.getElementById("root")
);
