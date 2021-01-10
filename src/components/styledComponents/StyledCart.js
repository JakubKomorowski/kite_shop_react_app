import styled from "styled-components";

export const CartUl = styled.ul`
  list-style: none;
`;

export const CartLi = styled.li`
  padding: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #e7e7e7;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const CartImg = styled.img`
  height: 100px;
`;

export const CartProductQuantity = styled.p`
  padding: 5px 20px;
  border-top: 2px solid #e7e7e7;
  border-bottom: 2px solid #e7e7e7;
  width: 46px;
`;

export const CartAddOneButton = styled.button`
  border: 2px solid #e7e7e7;
  background-color: white;
  color: black;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  &:hover {
    background: #e7e7e7;
  }
`;

export const CartProductName = styled.p``;

export const CartProductPrice = styled.p`
  padding: 5px 20px;
  margin-left: 20px;
  font-size: 1.2rem;
  width: 100px;
  @media (max-width: 1000px) {
    margin-top: 1rem;
    margin-left: 0;
  }
`;

export const CartImgWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
`;

export const ContinueShoppingBtn = styled.button`
  background: white;
  border: 1px solid ${({ theme }) => theme.primaryBlue};
  padding: 0.5em 1.75em;

  width: 100%;
  color: ${({ theme }) => theme.primaryBlue};
  text-transform: capitalize;
  font-size: 1em;
  outline: none;
  width: 250px;

  &:hover {
    background-color: #edf7f9;
  }
`;

export const ContinueShoppingBtnWrapper = styled.div`
  width: 260px;
  @media (max-width: 1000px) {
    margin-bottom: 1rem;
  }
`;

export const CartBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const CartTotal = styled.p`
  font-size: 1.4rem;
  margin: 1rem;
`;

export const AddOneWrapper = styled.div`
  display: flex;
`;

export const CartEmpty = styled.p`
  margin: 1rem auto;
`;

export const CartEmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
  width: 300px;
  @media (max-width: 1000px) {
    width: auto;
    margin: 1rem;
    align-items: center;
  }
`;
