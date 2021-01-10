import React, { useContext } from "react";
import styled from "styled-components";
import CartAlert from "../components/CartAlert";
import FilterDrawer from "../components/FilterDrawer";
import ProductsList from "../components/ProductsList";
import Sort from "../components/sort/Sort";
import { StyledCartAlertWoSize } from "../components/styledComponents/StyledSingleProduct";
import ShopContext from "../context";

const FilterAndSortWrapper = styled.div`
  display: flex;

  @media (max-width: 760px) {
    display: block;
    margin: 0 auto;
    width: 300px;
  }
`;

const FilterDrawerWrapper = styled.div`
  margin: 25px;
  @media (max-width: 760px) {
    margin: 0px;
  }
`;

const SortWrapper = styled.div`
  transition: all 0.4s ease-in-out;
  transform: ${(props) => (props.open ? "translateX(210px)" : "0px")};
`;

const AllProductsTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin: 1rem;
  color: ${({ theme }) => theme.dark};
`;

const Products = () => {
  const value = useContext(ShopContext);
  const { filterDrawerOpen, windowSize } = value;
  return (
    <>
      {windowSize ? (
        <>
          <AllProductsTitle>All Products</AllProductsTitle>
          <FilterAndSortWrapper>
            <FilterDrawerWrapper>
              <FilterDrawer />
            </FilterDrawerWrapper>
            <SortWrapper open={filterDrawerOpen}>
              <Sort />
            </SortWrapper>
          </FilterAndSortWrapper>
        </>
      ) : (
        <>
          <FilterAndSortWrapper>
            <FilterDrawerWrapper>
              <FilterDrawer />
            </FilterDrawerWrapper>
            <SortWrapper open={filterDrawerOpen}>
              <Sort />
            </SortWrapper>
          </FilterAndSortWrapper>
          <AllProductsTitle>All Products</AllProductsTitle>
        </>
      )}

      <ProductsList />
      <CartAlert />
      <StyledCartAlertWoSize />
    </>
  );
};

export default Products;
