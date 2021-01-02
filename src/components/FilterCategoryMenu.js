import React from "react";
import FilterByFreeDelivery from "./filters/FilterByFreeDelivery";
import FilterByName from "./filters/FilterByName";
import FilterProductsByPrice from "./filters/FilterProductsByPrice";

const FilterCategoryMenu = () => {
  return (
    <div>
      <FilterByName />
      <FilterProductsByPrice />
      <FilterByFreeDelivery />
    </div>
  );
};

export default FilterCategoryMenu;
