import React from "react";
import Cart from "../components/Cart";
import Navbar from "../components/navigations/Navbar";
import GlobalStyle from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../theme/mainTheme";

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <Navbar />
        <Cart />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
