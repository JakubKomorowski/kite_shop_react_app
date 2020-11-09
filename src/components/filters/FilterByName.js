import React, { useContext } from "react";
import ShopContext from "../../context";

const FilterByName = () => {
  const value = useContext(ShopContext);
  const { handleSearchChange, search } = value;
  return (
    <div>
      <form onChange={handleSearchChange} action="">
        <label htmlFor="search">Search</label>
        <input name="search" type="text" value={search} />
      </form>
    </div>
  );
};

export default FilterByName;
