import React, { useContext } from "react";
import ShopContext from "../context";
import { Link } from "react-router-dom";
import {
  CategoriesUl,
  ProductImg,
  CategoriesLi,
  CategoriesTitle,
  CategoriesLink,
} from "./styledComponents/StyledCategoriesList";

const CategoriesList = () => {
  const value = useContext(ShopContext);
  const { oneOfCategory, selectCategory } = value;

  return (
    <>
      <CategoriesUl>
        {oneOfCategory.map(({ productCategory, productImage, productName }) => {
          return (
            <CategoriesLink
              onClick={() => selectCategory(productCategory)}
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
