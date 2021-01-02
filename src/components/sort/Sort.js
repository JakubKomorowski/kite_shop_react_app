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
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Sort = () => {
  const classes = useStyles();
  const value = useContext(ShopContext);
  const { handleSortChange } = value;

  return (
    <div>
      <FormControl variant="standard" className={classes.formControl}>
        <InputLabel
          id="demo-simple-select-outlined-label"
          style={{ color: "black" }}
        >
          Sort
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={handleSortChange}
          label="Sort"
        >
          <MenuItem value="cheap">From The Cheapest</MenuItem>
          <MenuItem value="expensive">From The Most Expensive</MenuItem>
          <MenuItem value="az">From A to Z</MenuItem>
          <MenuItem value="za">From Z to A</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sort;
