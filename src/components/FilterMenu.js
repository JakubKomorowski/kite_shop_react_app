import React from "react";
import FilterByFreeDelivery from "./filters/FilterByFreeDelivery";
import FilterByName from "./filters/FilterByName";
import FilterProductsByCategory from "./filters/FilterProductsByCategory";
import FilterProductsByPrice from "./filters/FilterProductsByPrice";

const FilterMenu = () => {
  return (
    <div>
      <FilterByName />
      <FilterProductsByCategory />
      <FilterProductsByPrice />
      <FilterByFreeDelivery />
    </div>
  );
};

export default FilterMenu;
