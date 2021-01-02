import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ShopContext from "../context";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SizeSelector = () => {
  const classes = useStyles();

  const value = useContext(ShopContext);
  const {
    selectedProduct,
    kiteIdValue,
    handleKiteIdValueChange,
    allProducts,
    selectProduct,
    addToCart,
    selectKite,
    selectedKite,
  } = value;

  const { productCategory, productName, kiteId } = selectedProduct;

  const mappedKiteId = [
    ...new Set(
      selectedProduct.map((el) => {
        return el.kiteId;
      })
    ),
  ];

  console.log(kiteIdValue);
  console.log(selectedProduct);
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          onChange={(e) => {
            handleKiteIdValueChange(e);
            // selectKite(productName, kiteIdValue);
          }}
          id="demo-simple-select-outlined"
          value={kiteIdValue}
          label="Size"
        >
          {mappedKiteId.map((el) => {
            return (
              <MenuItem value={el}>
                {el === 1 ? "5m" : el === 2 ? "7m" : "9m"}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SizeSelector;
