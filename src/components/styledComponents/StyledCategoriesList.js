import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoriesUl = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 7rem;
  margin: 0 auto;
  margin-top: 30px;
  max-width: 900px;
`;

export const CategoriesLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover h2 {
    color: ${({ theme }) => theme.primaryBlue};
  }
`;

export const ProductImg = styled.img`
  height: 250px;
`;

export const CategoriesTitle = styled.h2`
  font-weight: 400;
  margin-top: 20px;
  color: black;
`;

export const CategoriesLink = styled(Link)`
  text-decoration: none;
`;
