import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100%;

    padding: 0;
    margin: 0;
  }

  * {
    color: var(--tone-1);
    box-sizing: border-box;
    outline: none;
  }

  ::selection {
    background-color: var(--primary-1);
  }

  *:focus {
    outline: 2px solid var(--primary);
  }

  :root {
    --primary: hsl(267, 100%, 60%);
    --primary-1: hsl(267, 50%, 60%);
    --error: rgb(224, 81, 81);
    --tone-1: hsl(267, 100%, 92%);
    --tone-2: hsl(267, 40%, 75%);
    --tone-3: hsl(267, 5%, 15%);
    --tone-4: hsl(267, 5%, 10%);
  }

  body {
    padding: 20px;
    font-size: 14px;

    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    background-color: var(--tone-4);
  }

  input,
  button {
    background-color: var(--tone-3);
    border: 1px solid var(--tone-1);
    margin: 2px;
  }

  button {
    padding: 4px;
  }

  input {
    width: 300px;
    padding: 4px 2px;
  }
`;
