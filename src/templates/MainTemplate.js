import React, { useContext, useState } from "react";
import Cart from "../components/Cart";
import Navbar from "../components/navigations/Navbar";
import GlobalStyle from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../theme/mainTheme";
import Alert from "../components/Alert";
import ShopContext from "../context";
import NewsletterModal from "../components/NewsletterModal";
import styled from "styled-components";
import arrowImg from "../assets/icons/up-arrow.svg";
import { animateScroll as scroll } from "react-scroll";

const StyledGoTopBtn = styled.button`
  background-color: ${({ theme }) => theme.dark};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  outline: none;
  border: none;
  background-image: url(${({ icon }) => icon});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: 50%;
  position: fixed;
  right: 4%;
  bottom: 5%;
  z-index: 1000;
`;

const MainTemplate = ({ children }) => {
  const [isScrollArrowVisible, setIsScrollArrowVisible] = useState(false);

  const value = useContext(ShopContext);

  const showScrollArrow = () => {
    if (!isScrollArrowVisible && window.pageYOffset > 400) {
      setIsScrollArrowVisible(true);
    } else if (isScrollArrowVisible && window.pageYOffset <= 400) {
      setIsScrollArrowVisible(false);
    }
  };

  window.addEventListener("scroll", showScrollArrow);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <Navbar />
        <Alert />
        <NewsletterModal />

        {isScrollArrowVisible ? (
          <StyledGoTopBtn
            icon={arrowImg}
            onClick={() => scroll.scrollToTop()}
          />
        ) : null}
        <Cart />

        {children}
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
