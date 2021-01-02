import React, { useContext } from "react";
import ShopContext from "../../context";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "222px",
    },
  },
}));

const FilterByName = () => {
  const classes = useStyles();
  const value = useContext(ShopContext);
  const { handleSearchChange, search } = value;
  return (
    <form
      onChange={handleSearchChange}
      className={classes.root}
      noValidate
      autoComplete="off"
      style={{ color: "#0088a9", marginLeft: "10px" }}
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={search}
        input
        name="search"
        color="primary"
      />
    </form>
  );
};

export default FilterByName;
