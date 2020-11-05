import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavUl = styled.ul`
  background-color: ${({ theme }) => theme.dark};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 3rem;
  list-style: none;
`;

export const StyledNavLi = styled.li`
  padding: 0 0.8rem;
`;

export const StyledNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primaryBlue};
  }
`;

export const StyledNavbarCart = styled.button`
  background-image: url(${({ cartIcon }) => cartIcon});
  background-color: coral;
  border-radius: 50%;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  background-size: 60%;
  outline: none;
  border: none;
  background-position: 50% 40%;
`;
