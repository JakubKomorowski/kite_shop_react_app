import React, { useContext } from "react";
import ShopContext from "../context";
import {
  CategoriesUl,
  ProductImg,
  CategoriesLi,
  CategoriesTitle,
  CategoriesLink,
} from "./styledComponents/StyledCategoriesList";

const CategoriesList = () => {
  const value = useContext(ShopContext);
  const {
    oneOfCategory,
    selectCategory,
    handleFilterDrawerClose,
    resetFilters,
  } = value;

  return (
    <>
      <CategoriesUl>
        {oneOfCategory.map(({ productCategory, productImage, productName }) => {
          return (
            <CategoriesLink
              onClick={() => {
                selectCategory(productCategory);
                handleFilterDrawerClose();
                resetFilters();
              }}
              to={`categories/${productCategory}`}
            >
              <CategoriesLi>
                <ProductImg src={productImage} alt={productName} />
                <CategoriesTitle>
                  {productCategory.toUpperCase()}
                </CategoriesTitle>
              </CategoriesLi>
            </CategoriesLink>
          );
        })}
      </CategoriesUl>
    </>
  );
};

export default CategoriesList;
