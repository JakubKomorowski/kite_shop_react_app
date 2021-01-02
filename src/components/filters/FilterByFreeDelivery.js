import React, { useContext } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import ShopContext from "../../context";
import styled from "styled-components";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const FilterByFreeDelivery = () => {
  const value = useContext(ShopContext);
  const { handleFreeDeliveryChange, freeDelivery } = value;

  const FilterWrapper = styled.div`
    margin-left: 15px;
  `;

  return (
    <FilterWrapper>
      <FormControlLabel
        control={
          <Checkbox
            checked={freeDelivery && true}
            onChange={handleFreeDeliveryChange}
            defaultChecked
            // color="primary"
            // id="free-delivery-checkbox"
            style={{ color: "#0088a9" }}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label="Free delivery"
      />
    </FilterWrapper>
  );
};

export default FilterByFreeDelivery;
