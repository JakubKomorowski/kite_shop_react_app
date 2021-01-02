import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavUl = styled.ul`
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0.5rem 3rem;
  list-style: none;
  -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 760px) {
    padding: 0.5rem 1rem;
  }
`;

export const StyledNavLi = styled.li`
  padding: 0 0.8rem;
`;

export const StyledNavLink = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.dark};
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primaryBlue};
  }
`;

export const StyledNavbarCart = styled.button`
  background-image: url(${({ cartIcon }) => cartIcon});
  background-color: #ff8539;
  border-radius: 50%;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  background-size: 60%;
  outline: none;
  border: none;
  background-position: 50% 40%;
`;

export const StyledDropdownUl = styled.ul`
  position: absolute;
  flex-direction: column;
  display: ${(props) => (props.menu ? "flex" : "none")};
  list-style: none;
  text-decoration: none;
  padding: 20px 0;
  text-transform: capitalize;
`;

export const StyledDropdownLi = styled.li`
  justify-content: flex-start;
  border-left: 3px solid ${({ theme }) => theme.primaryBlue};
  width: 160px;
  background-color: white;
  padding: 5px 16px 10px;
  z-index: 2;
`;

export const StyledLogo = styled.div`
  width: 50px;
  height: 50px;
`;

export const StyledLiWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 760px) {
    position: absolute;
    right: ${(props) => (props.navMenuOpen ? "0px" : "-50px")};
    height: 90vh;
    top: 66px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${(props) => (props.navMenuOpen ? "300px" : "0px")};
    z-index: 1000;
    justify-content: space-around;

    transition: all 0.4s ease-in-out;
    -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledName = styled.h1`
  margin-left: 0.5rem;
`;

export const StyledLogoLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.dark};
  flex-grow: 2;
`;

export const StyledBurger = styled.div`
  margin-left: 1rem;
  cursor: pointer;
  .line1,
  .line2,
  .line3 {
    width: 25px;
    height: 3px;
    background: #24252a;
    margin: 5px;
  }
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
  .line1 {
    transition: transform 0.3s;
    transform: ${(props) =>
      props.navMenuOpen
        ? "rotate(-45deg) translate(-5px,6px)"
        : "rotate(0deg)"};
  }

  .line2 {
    opacity: ${(props) => (props.navMenuOpen ? "0" : "1")};
  }

  .line3 {
    transition: transform 0.3s;
    transform: ${(props) =>
      props.navMenuOpen
        ? "rotate(45deg) translate(-5px,-6px)"
        : "rotate(0deg)"};
  }
`;
