import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialAlert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import ShopContext from "../context";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alert = () => {
  const value = useContext(ShopContext);
  const { handleAlertClose, isAlertOpen, alertContent, alertType } = value;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Collapse in={isAlertOpen}>
        <MaterialAlert
          severity={alertType}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleAlertClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {alertContent}
        </MaterialAlert>
      </Collapse>
    </div>
  );
};

export default Alert;
