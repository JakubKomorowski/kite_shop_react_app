import React, { useState } from "react";
import Cart from "../components/Cart";
import Navbar from "../components/navigations/Navbar";
import GlobalStyle from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../theme/mainTheme";
import Alert from "../components/Alert";
import NewsletterModal from "../components/NewsletterModal";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import Footer from "../components/navigations/Footer";
import { IoIosArrowDropup } from "react-icons/io";

const StyledGoTopTwoBtn = styled(IoIosArrowDropup)`
  position: fixed;
  right: 4%;
  bottom: 5%;
  cursor: pointer;
`;

const GlobalWrapper = styled.div`
  overflow-x: hidden;
  position: relative;
`;

const Children = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 66px - 50px - 50px);
`;

const MainTemplate = ({ children }) => {
  const [isScrollArrowVisible, setIsScrollArrowVisible] = useState(false);

  const showScrollArrow = () => {
    if (!isScrollArrowVisible && window.pageYOffset > 400) {
      setIsScrollArrowVisible(true);
    } else if (isScrollArrowVisible && window.pageYOffset <= 400) {
      setIsScrollArrowVisible(false);
    }
  };

  window.addEventListener("scroll", showScrollArrow);

  return (
    <GlobalWrapper>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <Navbar />
        <Alert />
        <NewsletterModal />
        {isScrollArrowVisible ? (
          <StyledGoTopTwoBtn size={41} onClick={() => scroll.scrollToTop()} />
        ) : null}
        <Cart />
        <Children>{children}</Children>
        <Footer />
      </ThemeProvider>
    </GlobalWrapper>
  );
};

export default MainTemplate;
