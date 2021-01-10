import React, { useContext } from "react";
import ShopContext from "../context";
import Product from "../components/Product";
import CartAlert from "../components/CartAlert";
import {
  ProductsListUl,
  ProductsListWrapper,
} from "../components/styledComponents/StyledProductsList";
import FilterCategoryMenu from "../components/FilterCategoryMenu";
import Sort from "../components/sort/Sort";
import styled from "styled-components";
import CartAlertWoSize from "../components/CartAlertWoSize";

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
  text-transform: capitalize;
`;

const Category = () => {
  const value = useContext(ShopContext);
  const { selectedCategory, filterDrawerOpen, windowSize } = value;

  return (
    <>
      {windowSize ? (
        <>
          <AllProductsTitle>
            {selectedCategory.map((product, i) => {
              return <>{i === 0 ? product.productCategory : null}</>;
            })}
          </AllProductsTitle>
          <FilterAndSortWrapper>
            <FilterDrawerWrapper>
              <FilterCategoryMenu />
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
              <FilterCategoryMenu />
            </FilterDrawerWrapper>
            <SortWrapper open={filterDrawerOpen}>
              <Sort />
            </SortWrapper>
          </FilterAndSortWrapper>
          <AllProductsTitle>
            {selectedCategory.map((product, i) => {
              return <>{i === 0 ? product.productCategory : null}</>;
            })}
          </AllProductsTitle>
        </>
      )}

      <ProductsListWrapper>
        <ProductsListUl>
          {selectedCategory.map((product) => {
            return (
              <li>
                <Product {...product} />
              </li>
            );
          })}
        </ProductsListUl>
      </ProductsListWrapper>
      <CartAlert />
      <CartAlertWoSize />
    </>
  );
};

export default Category;
