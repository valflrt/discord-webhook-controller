import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100%;

    overflow:  hidden auto;

    color: #f1f1f1;
    background-color: #16161a;
  }
`;
