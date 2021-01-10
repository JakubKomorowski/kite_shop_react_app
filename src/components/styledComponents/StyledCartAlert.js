import styled from "styled-components";
import DialogTitle from "@material-ui/core/DialogTitle";

export const Wrapper = styled.ul`
  list-style: none;
`;

export const CartAlertImg = styled.img`
  height: 150px;

  @media (max-width: 600px) {
    width: auto;
    object-fit: contain;
  }
`;

export const PriceNameImgWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const PriceNameWrapper = styled.div`
  height: 150px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 1.1rem;
  @media (max-width: 600px) {
    height: 100px;
    margin-left: 0;
  }
`;

export const StyledProductName = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
`;

export const StyledProductPrice = styled.p`
  font-size: 1rem;
`;

export const SizeSelectorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 10px 0 10px 0;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
export const StyledDialogTitle = styled(DialogTitle)`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryBlue};
  color: white;
  height: 3.5rem;
  align-items: center;
`;

export const ContinueShoppingBtn = styled.button`
  background: white;
  border: 1px solid ${({ theme }) => theme.primaryBlue};
  padding: 0.5em 1.75em;
  color: ${({ theme }) => theme.primaryBlue};
  text-transform: capitalize;
  font-size: 1em;
  outline: none;
  margin: 15px;
  &:hover {
    background-color: #edf7f9;
  }
  @media (max-width: 600px) {
    margin: 5px;
  }
`;

export const AddToCartBtn = styled.button`
  background: white;
  border: 1px solid #ff8539;
  padding: 0.5em 1.75em;
  color: #ff8539;
  text-transform: capitalize;
  font-size: 1em;
  outline: none;
  margin: 15px;
  &:hover {
    background-color: #fff1e9;
  }
  @media (max-width: 600px) {
    margin: 5px;
  }
`;

export const StyledDialogActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;
