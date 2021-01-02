import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 450px;
  justify-content: space-between;
  margin-bottom: 50px;
  background-color: white;
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImg = styled.img`
  height: 250px;
`;

export const ProductTitle = styled.p`
  font-size: 18px;
`;

export const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 22px;
`;

export const AddToCartBtn = styled.button`
  background: #ff8539;
  padding: 0.5em 1.75em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  border: none;
  outline: none;
  width: 100%;
  &:hover {
    background-color: #f47e33;
  }
`;
export const ViewBtn = styled.button`
  background: ${({ theme }) => theme.primaryBlue};
  padding: 0.5em 1.75em;
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
`;
