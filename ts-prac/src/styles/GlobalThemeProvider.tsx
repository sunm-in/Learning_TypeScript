import React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

interface Prop {
  children?: React.ReactElement | React.ReactElement[] | string;
}

const GlobalThemeProvider = ({ children }: Prop) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

GlobalThemeProvider.defaultProps = { children: null };

export default GlobalThemeProvider;
