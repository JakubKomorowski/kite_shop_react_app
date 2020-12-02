import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import ShopContext from "../../context";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

const marks = [
  {
    value: 0,
    label: "0$",
  },
  {
    value: 1000,
    label: "1000$",
  },
];
// function valuetext(priceRange) {
//   return `${priceRange}°C`;
// }

const FilterProductsByPrice = () => {
  const value = useContext(ShopContext);
  const { priceRange, handlePriceChange } = value;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Filter by price
      </Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        // getAriaValueText={valuetext}
        style={{ color: "#0088a9", marginLeft: "10px" }}
        max={1000}
        marks={marks}
      />
    </div>
  );
};

export default FilterProductsByPrice;
