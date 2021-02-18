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
`;

const Button = ({ children, buttonType, onClickFn }) => {
  return (
    <StyledButton onClick={onClickFn} buttonType={buttonType}>
      {children}
    </StyledButton>
  );
};

export default Button;
