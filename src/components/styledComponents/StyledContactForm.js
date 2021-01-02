import styled from "styled-components";
import { Form, Field } from "formik";

export const StyledField = styled(Field)`
  width: 100%;
  display: block;
  border-radius: 5px;
  border: none;
  background-color: white;
  border: 1px solid lightgray;
  height: 2.5rem;
  margin-top: 5px;
  font-family: "Poppins";
  font-size: 1rem;
  outline: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primaryBlue};
  }
`;

export const StyledFieldWrapper = styled.div`
  margin-top: 20px;
`;

export const StyledMessage = styled(Field)`
  width: 100%;
  display: block;
  border-radius: 5px;
  border: none;
  background-color: white;
  border: 1px solid lightgray;
  height: 10rem;
  margin-top: 5px;
  resize: none;
  outline: none;
  font-family: "Poppins";
  font-size: 1rem;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primaryBlue};
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const StyledFormik = styled(Form)`
  background: white;
  margin-left: 10%;
  margin-right: -200px;
  z-index: 5;
  padding: 3rem 6rem;
  width: 700px;
  -webkit-box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
  flex-grow: 2;
  @media (max-width: 1000px) {
    width: 90%;
    padding: 3rem 3rem;
    align-items: center;
    justify-content: center;
    margin: 3rem auto;
  }
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.dark};
`;

export const StyledErrorWrapper = styled.div`
  color: red;
`;

export const StyledGoogleMapWrapper = styled.div`
  width: 60%;

  @media (max-width: 1000px) {
    min-width: 100%;
  }
`;

export const StyledButton = styled.div`
  margin-top: 20px;
`;
