import React from "react";
import CartAlert from "../components/CartAlert";
import HomePageCategoriesList from "../components/HomePageCategoriesList";
import MostPopularProducts from "../components/MostPopularProducts";
import Slider from "../components/Slider/Slider";
import {
  TitleContainer,
  Wrapper,
} from "../components/styledComponents/StyledHome";
import { StyledCartAlertWoSize } from "../components/styledComponents/StyledSingleProduct";

const Home = () => {
  return (
    <>
      <Wrapper>
        <Slider />
        <TitleContainer>
          <h2>Most Popular Products</h2>
        </TitleContainer>
        <MostPopularProducts />
        <TitleContainer>
          <h2>Categories</h2>
        </TitleContainer>
        <HomePageCategoriesList />
      </Wrapper>
      <CartAlert />
      <StyledCartAlertWoSize />
    </>
  );
};

export default Home;
