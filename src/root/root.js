import React from 'react';
import GlobalStyle from '../theme/globalStyle';
import { theme } from '../theme/mineTheme';
import { ThemeProvider } from 'styled-components';
import Sidebar from '../components/organisms/sidebar/sidebar';
const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Sidebar />
    </ThemeProvider>
  </>
);

export default Root;
