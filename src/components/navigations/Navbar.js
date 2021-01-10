import React, { useContext } from "react";
import ShopContext from "../../context";
import { routes } from "../../routes";
import {
  StyledNavUl,
  StyledNavLi,
  StyledNavLink,
  StyledNavbarCart,
  StyledDropdownUl,
  StyledDropdownLi,
  StyledLogo,
  StyledLiWrapper,
  StyledLogoWrapper,
  StyledName,
  StyledLogoLink,
  StyledBurger,
  StyledCartAndLiWrapper,
} from "../styledComponents/StyledNavbar";
import cartIcon from "../../assets/icons/shopping-bag.svg";
import kiteLogo from "../../assets/icons/kiteLogo.png";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const value = useContext(ShopContext);
  const {
    cartCounter,
    handleCartOpen,
    oneOfCategory,
    handleMenuOpen,
    handleMenuClose,
    menuOpen,
    selectCategory,
    handleNavMenuOpen,
    navMenuOpen,
    windowSize,
    handleNavMenuClose,
    resetFilters,
    handleFilterDrawerClose,
  } = value;

  return (
    <nav>
      <StyledNavUl>
        <StyledLogoLink to={routes.home}>
          <StyledLogoWrapper>
            <StyledLogo>
              <img src={kiteLogo} alt="kiteLogo" style={{ width: "50px" }} />
            </StyledLogo>
            <StyledName>Kite Shop</StyledName>
          </StyledLogoWrapper>
        </StyledLogoLink>
        <StyledCartAndLiWrapper>
          <StyledLiWrapper navMenuOpen={navMenuOpen}>
            <StyledNavLi onClick={handleNavMenuClose} navMenuOpen={navMenuOpen}>
              <StyledNavLink
                to={routes.home}
                onClick={() => {
                  handleFilterDrawerClose();
                  resetFilters();
                }}
              >
                Home
              </StyledNavLink>
            </StyledNavLi>
            <StyledNavLi onClick={handleNavMenuClose} navMenuOpen={navMenuOpen}>
              <StyledNavLink to={routes.contact}>Contact</StyledNavLink>
            </StyledNavLi>
            <StyledNavLi onClick={handleNavMenuClose} navMenuOpen={navMenuOpen}>
              <StyledNavLink
                to={routes.products}
                onClick={() => {
                  handleFilterDrawerClose();
                  resetFilters();
                }}
              >
                Products
              </StyledNavLink>
            </StyledNavLi>
            {windowSize ? (
              <StyledNavLi
                onClick={handleNavMenuClose}
                navMenuOpen={navMenuOpen}
              >
                <StyledNavLink to={routes.categories}>Categories</StyledNavLink>
              </StyledNavLi>
            ) : (
              <StyledNavLi
                navMenuOpen={navMenuOpen}
                onMouseEnter={handleMenuOpen}
                onMouseLeave={handleMenuClose}
              >
                <StyledNavLink to={routes.categories}>
                  Categories <IoMdArrowDropdown />
                </StyledNavLink>
                <StyledDropdownUl menu={menuOpen}>
                  {oneOfCategory.map(({ productCategory }) => {
                    return (
                      <StyledDropdownLi>
                        <StyledNavLink
                          onClick={() => {
                            selectCategory(productCategory);
                            handleFilterDrawerClose();
                            resetFilters();
                          }}
                          to={`${routes.categories}/${productCategory}`}
                        >
                          {productCategory}
                        </StyledNavLink>
                      </StyledDropdownLi>
                    );
                  })}
                </StyledDropdownUl>
              </StyledNavLi>
            )}
          </StyledLiWrapper>
          <StyledNavbarCart onClick={handleCartOpen} cartIcon={cartIcon}>
            {cartCounter}
          </StyledNavbarCart>

          <StyledBurger onClick={handleNavMenuOpen} navMenuOpen={navMenuOpen}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </StyledBurger>
        </StyledCartAndLiWrapper>
      </StyledNavUl>
    </nav>
  );
};

export default Navbar;
