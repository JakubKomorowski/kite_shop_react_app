import React, { useContext } from "react";
import ShopContext from "../context";
import Product from "../components/Product";
import CartAlert from "../components/CartAlert";

import {
  ProductsListUl,
  ProductsListWrapper,
} from "../components/styledComponents/StyledProductsList";

import FilterCategoryMenu from "../components/FilterCategoryMenu";

const Category = () => {
  const value = useContext(ShopContext);
  const { selectedCategory } = value;

  return (
    <>
      <CartAlert />
      <FilterCategoryMenu />
      <ProductsListWrapper>
        <ProductsListUl>
          {selectedCategory.map((product) => {
            return (
              <li>
                <Product {...product} />
              </li>
            );
          })}
        </ProductsListUl>
      </ProductsListWrapper>
    </>
  );
};

export default Category;
