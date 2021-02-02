import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: "Open Sans";
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    font-family: "Open Sans", sans-serif;
    line-height: 1.5;
    color: ${({ theme }) => theme.darkgrey};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
  }

  ul {
    list-style: none;
  }
`;
