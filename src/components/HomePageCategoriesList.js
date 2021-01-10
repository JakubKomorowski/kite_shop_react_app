import React, { useContext } from "react";
import ShopContext from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductsListWrapper = styled.div`
  display: grid;
  grid-template-columns: 12% 76% 12%;
  @media (max-width: 1000px) {
    grid-template-columns: 7% 86% 7%;
  }
`;

const CategoriesUl = styled.ul`
  display: grid;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 3rem;
  list-style: none;
  justify-content: center;
`;

const CategoriesLi = styled.li`
  border: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 340px;
  justify-content: center;
  margin-bottom: 50px;
  background-color: white;
  &:hover h2 {
    color: ${({ theme }) => theme.primaryBlue};
  }
`;

const ProductImg = styled.img`
  height: 250px;
`;

const CategoriesTitle = styled.h2`
  font-weight: 400;
  margin-top: 20px;
  color: black;
`;

const CategoriesLink = styled(Link)`
  text-decoration: none;
`;

const HomePageCategoriesList = () => {
  const value = useContext(ShopContext);
  const { oneOfCategory, selectCategory } = value;

  return (
    <>
      <ProductsListWrapper>
        <CategoriesUl>
          {oneOfCategory.map(
            ({ productCategory, productImage, productName }) => {
              return (
                <CategoriesLink
                  onClick={() => selectCategory(productCategory)}
                  to={`categories/${productCategory}`}
                >
                  <CategoriesLi>
                    <ProductImg src={productImage} alt={productName} />
                    <CategoriesTitle>
                      {productCategory.toUpperCase()}
                    </CategoriesTitle>
                  </CategoriesLi>
                </CategoriesLink>
              );
            }
          )}
        </CategoriesUl>
      </ProductsListWrapper>
    </>
  );
};

export default HomePageCategoriesList;
