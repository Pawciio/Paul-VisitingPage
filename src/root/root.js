import React from 'react';
import GlobalStyle from '../theme/globalStyle';
import { theme } from '../theme/mineTheme';
import { ThemeProvider } from 'styled-components';
import Sidebar from '../components/organisms/sidebar/sidebar';
import Header from '../components/organisms/header/header';
import AboutUs from '../components/organisms/aboutUs/aboutUs';
import Services from '../components/organisms/services/services';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Sidebar />
      <Header />
      <AboutUs />
      <Services />
    </ThemeProvider>
  </>
);

export default Root;
