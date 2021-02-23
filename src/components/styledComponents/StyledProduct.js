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
