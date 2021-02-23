import React from "react";
import styled, { css } from "styled-components";
import { buttonsTypes } from "../../utils/buttonsTypes";

const StyledButton = styled.button`
  padding: 0.5em 1.75em;
  width: 100%;
  color: white;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-size: 1.25em;

  ${({ buttonType }) =>
    buttonType === buttonsTypes.view &&
    css`
      background: ${({ theme }) => theme.primaryBlue};
      margin-top: 10px;

      &:hover {
        background-color: #007a9b;
      }
    `}

  ${({ buttonType }) =>
    buttonType === buttonsTypes.addProduct &&
    css`
      background: #ff8539;
      &:hover {
        background-color: #f47e33;
      }
    `}
    ${({ buttonType }) =>
    buttonType === buttonsTypes.addToCart &&
    css`
      width: 50%;
      background: #ff8539;
      &:hover {
        background-color: #f47e33;
      }
      @media (max-width: 700px) {
        width: 100%;
      }
    `}
    ${({ buttonType }) =>
    buttonType === buttonsTypes.continueShopping &&
    css`
      border: 1px solid ${({ theme }) => theme.primaryBlue};
      color: ${({ theme }) => theme.primaryBlue};
      margin: 15px;
      font-size: 1rem;
      text-transform: capitalize;
      width: auto;
      background-color: white;
      &:hover {
        background-color: #edf7f9;
      }
      @media (max-width: 600px) {
        margin: 5px;
      }
    `}

    ${({ buttonType }) =>
    buttonType === buttonsTypes.continueShoppingCart &&
    css`
      border: 1px solid ${({ theme }) => theme.primaryBlue};
      color: ${({ theme }) => theme.primaryBlue};

      font-size: 1rem;
      text-transform: capitalize;
      width: 250px;
      background-color: white;
      &:hover {
        background-color: #edf7f9;
      }
    `}

    ${({ buttonType }) =>
    buttonType === buttonsTypes.addToCartOutlined &&
    css`
      border: 1px solid ${({ theme }) => theme.primaryOrange};
      color: ${({ theme }) => theme.primaryOrange};
      margin: 15px;
      font-size: 1rem;
      text-transform: capitalize;
      width: auto;
      background-color: white;
      &:hover {
        background-color: #fff1e9;
      }
      @media (max-width: 600px) {
        margin: 5px;
      }
    `}

    ${({ buttonType }) =>
    buttonType === buttonsTypes.subscribe &&
    css`
      background: ${({ theme }) => theme.primaryBlue};
      width: 100%;
      color: white;
      border: none;
      text-transform: uppercase;
      font-size: 1.25em;
      outline: none;
      margin-top: 10px;
      &:hover {
        background-color: #007a9b;
      }
    `}
`;

const Button = ({ children, buttonType, onClickFn }) => {
  return (
    <StyledButton onClick={onClickFn} buttonType={buttonType}>
      {children}
    </StyledButton>
  );
};

export default Button;
