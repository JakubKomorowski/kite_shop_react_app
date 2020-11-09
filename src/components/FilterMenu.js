import React from "react";
import FilterByName from "./filters/FilterByName";
import FilterProductsByCategory from "./filters/FilterProductsByCategory";
import FilterProductsByPrice from "./filters/FilterProductsByPrice";

const FilterMenu = () => {
  return (
    <div>
      <FilterByName />
      <FilterProductsByCategory />
      <FilterProductsByPrice />
    </div>
  );
};

export default FilterMenu;
