import React, { useContext } from "react";
import ShopContext from "../../context";

const FilterProductsByCategory = () => {
  const value = useContext(ShopContext);
  const { products, category, handleCategoryChange } = value;

  const productsCategory = [
    "all",
    ...new Set(
      products.map((el) => {
        return el.productCategory;
      })
    ),
  ];

  return (
    <>
      <label htmlFor="productCategorySelect">Filter by category</label>
      <select
        onChange={handleCategoryChange}
        name="productCategorySelect"
        id="productCategorySelect"
        value={category}
      >
        {productsCategory.map((el) => {
          return <option>{el}</option>;
        })}
      </select>
    </>
  );
};

export default FilterProductsByCategory;
