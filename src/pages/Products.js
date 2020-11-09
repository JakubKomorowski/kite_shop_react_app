import React from "react";

import CartAlert from "../components/CartAlert";
import FilterMenu from "../components/FilterMenu";
import ProductsList from "../components/ProductsList";

const Products = () => {
  return (
    <>
      <FilterMenu />
      <ProductsList />
      <CartAlert />
    </>
  );
};

export default Products;
