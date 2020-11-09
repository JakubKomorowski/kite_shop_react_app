import React, { useContext } from "react";
import ShopContext from "../context";
import Product from "./Product";
import {
  ProductsListUl,
  ProductsListWrapper,
} from "./styledComponents/StyledProductsList";

const ProductsList = () => {
  const value = useContext(ShopContext);
  const { filteredProducts } = value;

  return (
    <ProductsListWrapper>
      <ProductsListUl>
        {filteredProducts.map((product) => {
          return (
            <li>
              <Product {...product} />
            </li>
          );
        })}
      </ProductsListUl>
    </ProductsListWrapper>
  );
};

export default ProductsList;
