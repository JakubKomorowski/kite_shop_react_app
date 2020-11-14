import React, { useContext } from "react";
import Cart from "../components/Cart";
import Navbar from "../components/navigations/Navbar";
import GlobalStyle from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../theme/mainTheme";
import PaymentAlert from "../components/PaymentAlert";
import ShopContext from "../context";

const MainTemplate = ({ children }) => {
  const value = useContext(ShopContext);
  const { isPaymentAlertOpen } = value;
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <Navbar />
        {isPaymentAlertOpen ? <PaymentAlert /> : null}

        <Cart />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
