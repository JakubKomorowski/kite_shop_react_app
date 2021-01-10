import React, { useContext } from "react";
import ShopContext from "../context";
import Product from "./Product";
import styled from "styled-components";

const ProductsListWrapper = styled.div`
  display: grid;
  grid-template-columns: 12% 76% 12%;
  @media (max-width: 1000px) {
    grid-template-columns: 7% 86% 7%;
  }
`;

const ProductsListUl = styled.ul`
  display: grid;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 3rem;
  list-style: none;
  justify-content: center;
`;

const MostPopularProducts = () => {
  const value = useContext(ShopContext);
  const { filteredProducts } = value;

  return (
    <ProductsListWrapper>
      <ProductsListUl>
        {filteredProducts.map((product, i) => {
          const { productId } = product;
          return (
            <>
              {i % 4 === 0 ? (
                <li key={productId}>
                  <Product {...product} />
                </li>
              ) : (
                ""
              )}
            </>
          );
        })}
      </ProductsListUl>
    </ProductsListWrapper>
  );
};

export default MostPopularProducts;
