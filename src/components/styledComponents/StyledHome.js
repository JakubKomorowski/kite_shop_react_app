import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  color: ${({ theme }) => theme.dark};
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  padding: 4rem 0 0.5rem;
  margin-bottom: 0.8rem;
  width: 74vw;
  font-size: 1.4rem;
`;
