import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 1rem 0;
  background: ${({ theme }) => theme.dark};
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const FooterCopyright = styled.p`
  font-size: 0.8rem;
`;
