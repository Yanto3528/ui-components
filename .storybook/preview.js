import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/GlobalStyle";
import CSSReset from "../src/components/storybook/CSSReset";
import theme from "../src/styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // layout: "centered",
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CSSReset>
        <Story />
      </CSSReset>
    </ThemeProvider>
  ),
];
