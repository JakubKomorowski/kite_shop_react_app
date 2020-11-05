import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../../context";
import { routes } from "../../routes";
import {
  StyledNavUl,
  StyledNavLi,
  StyledNavLink,
  StyledNavbarCart,
} from "../styledComponents/StyledNavbar";
import cartIcon from "../../assets/icons/shopping-bag.svg";

const Navbar = () => {
  const value = useContext(ShopContext);
  const { cartCounter, handleCartOpen } = value;

  return (
    <nav>
      <StyledNavUl>
        <StyledNavLi>
          <StyledNavLink to={routes.home}>Home</StyledNavLink>
        </StyledNavLi>
        <StyledNavLi>
          <StyledNavLink to={routes.about}>About</StyledNavLink>
        </StyledNavLi>
        <StyledNavLi>
          <StyledNavLink to={routes.contact}>Contact</StyledNavLink>
        </StyledNavLi>
        <StyledNavLi>
          <StyledNavLink to={routes.products}>Products</StyledNavLink>
        </StyledNavLi>
        <StyledNavLi>
          <StyledNavbarCart onClick={handleCartOpen} cartIcon={cartIcon}>
            {cartCounter}
          </StyledNavbarCart>
        </StyledNavLi>
      </StyledNavUl>
    </nav>
  );
};

export default Navbar;
