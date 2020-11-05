import styled, { css } from "styled-components";

export const ProductsListWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
`;

export const ProductsListUl = styled.ul`
  display: grid;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 5rem;
  max-width: 1100px;
  list-style: none;
  justify-content: center;
  padding-top: 100px;
`;

export const ProductsListLi = styled.li``;
