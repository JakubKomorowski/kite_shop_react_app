import styled from "styled-components";
import CartAlert from "../../components/CartAlert";
import CartAlertWoSize from "../../components/CartAlertWoSize";

export const Wrapper = styled.div`
  margin: 0 2rem;
`;

export const ProductImg = styled.img`
  height: 600px;
  border: 1px solid #f0f0f0;
  @media (max-width: 1300px) {
    height: 400px;
  }
  @media (max-width: 1000px) {
    width: 80%;
    height: auto;
  }
  @media (max-width: 700px) {
    width: 100%;
    height: auto;
  }
`;

export const ProductName = styled.h1`
  color: ${({ theme }) => theme.primaryBlue};
`;

export const SingleProductWrapper = styled.li`
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 100px;
  /* justify-content: center; */
  @media (max-width: 1000px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;

export const ProductInfoWrapper = styled.div`
  margin-left: 100px;
  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`;

export const ProductPrice = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0;
  color: ${({ theme }) => theme.dark};
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  margin: 1rem 0;
  text-align: justify;
  max-width: 600px;
`;

export const AdditionalProductsWrapper = styled.ul`
  max-width: 1300px;
  display: grid;
  list-style: none;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, 230px);
  grid-gap: 2rem;
  @media (max-width: 740px) {
    justify-content: center;
  }
`;

export const SingleAdditionalProduct = styled.li`
  margin: 1rem 3rem 0 0;
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 220px;
`;

export const AdditionalProductImg = styled.img`
  height: 180px;
  margin-top: 0.5rem;
`;

export const AdditionalProductInfo = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AdditionalText = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 100px;
  background-color: ${({ theme }) => theme.primaryBlue};
  padding: 0.5rem;
  color: white;
  display: flex;
  justify-content: center;
`;

export const AdditionalProductPrice = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
`;

export const StyledCartAlert = styled(CartAlert)`
  list-style: none;
`;

export const StyledCartAlertWoSize = styled(CartAlertWoSize)`
  list-style: none;
`;

export const AdditionalProductName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 19ch;
`;
