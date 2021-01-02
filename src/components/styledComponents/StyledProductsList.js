import styled from "styled-components";

export const ProductsListWrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  @media (max-width: 1000px) {
    grid-template-columns: 7% 86% 7%;
  }
`;

export const ProductsListUl = styled.ul`
  display: grid;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 3rem;
  list-style: none;
  justify-content: center;
`;
