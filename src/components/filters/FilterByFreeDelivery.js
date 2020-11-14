import React, { useContext } from "react";
import ShopContext from "../../context";

const FilterByFreeDelivery = () => {
  const value = useContext(ShopContext);
  const { handleFreeDeliveryChange, freeDelivery } = value;
  return (
    <div>
      <label htmlFor="free-delivery-checkbox">free delivery: </label>
      <input
        type="checkbox"
        id="free-delivery-checkbox"
        checked={freeDelivery && true}
        onChange={handleFreeDeliveryChange}
      />
    </div>
  );
};

export default FilterByFreeDelivery;
