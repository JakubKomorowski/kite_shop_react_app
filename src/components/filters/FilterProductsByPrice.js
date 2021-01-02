import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import ShopContext from "../../context";

const useStyles = makeStyles({
  root: {
    width: 210,
  },
});

const marks = [
  {
    value: 0,
    label: "0$",
  },
  {
    value: 1500,
    label: "1500$",
  },
];

const FilterProductsByPrice = () => {
  const value = useContext(ShopContext);
  const { priceRange, handlePriceChange } = value;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        id="range-slider"
        gutterBottom
        style={{ color: "black", marginLeft: "18px" }}
      >
        Price
      </Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        // getAriaValueText={valuetext}
        style={{ color: "#0088a9", marginLeft: "24px" }}
        max={1500}
        marks={marks}
      />
    </div>
  );
};

export default FilterProductsByPrice;
