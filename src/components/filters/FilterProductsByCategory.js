import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import React, { useContext } from "react";
import ShopContext from "../../context";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 222,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

const FilterProductsByCategory = () => {
  const classes = useStyles();
  const value = useContext(ShopContext);
  const { products, category, handleCategoryChange } = value;

  const productsCategory = [
    "All",
    ...new Set(
      products.map((el) => {
        return el.productCategory;
      })
    ),
  ];

  return (
    <div>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        style={{ marginLeft: "18px" }}
      >
        <InputLabel id="productCategorySelect">Category</InputLabel>
        <Select
          onChange={handleCategoryChange}
          name="productCategorySelect"
          id="demo-simple-select-outlined"
          value={category}
          label="Category"
        >
          {productsCategory.map((el) => {
            return <MenuItem value={el}>{el}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterProductsByCategory;
