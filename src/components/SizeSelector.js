import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ShopContext from "../context";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SizeSelector = () => {
  const classes = useStyles();

  const value = useContext(ShopContext);
  const { selectedProduct, kiteIdValue, handleKiteIdValueChange } = value;

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
          }}
          id="demo-simple-select-outlined"
          value={kiteIdValue}
          label="Size"
        >
          {selectedProduct[0].productCategory === "kites"
            ? mappedKiteId.map((el) => {
                return (
                  <MenuItem value={el}>
                    {el === 1 ? "5m" : el === 2 ? "7m" : "9m"}
                  </MenuItem>
                );
              })
            : selectedProduct[0].productCategory === "boards"
            ? mappedKiteId.map((el) => {
                return (
                  <MenuItem value={el}>
                    {el === 1 ? "136cm" : el === 2 ? "142cm" : "148cm"}
                  </MenuItem>
                );
              })
            : mappedKiteId.map((el) => {
                return (
                  <MenuItem value={el}>
                    {el === 1 ? "S" : el === 2 ? "M" : "L"}
                  </MenuItem>
                );
              })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SizeSelector;
