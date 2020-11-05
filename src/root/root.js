import React from 'react';
import GlobalStyle from '../theme/globalStyle';
import { theme } from '../theme/mineTheme';
import { ThemeProvider } from 'styled-components';
import Sidebar from '../components/organisms/sidebar/sidebar';
import Header from '../components/organisms/header/header';
import AboutUs from '../components/organisms/aboutUs/aboutUs';
import Services from '../components/organisms/services/services';
import Gallery from '../components/organisms/gallery/gallery';
import HoverSidebarButton from '../components/atoms/hoverSidebarButton/hoverSidebarButton';

const Root = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme} ref={node}>
        <HoverSidebarButton open={open} setOpen={setOpen} />
        <Sidebar open={open} setOpen={setOpen} />
        <Header />
        <AboutUs />
        <Services />
        <Gallery />
      </ThemeProvider>
    </>
  );
};

export default Root;
