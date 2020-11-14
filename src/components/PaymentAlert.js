import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import ShopContext from "../context";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaymentAlert = () => {
  const value = useContext(ShopContext);
  const { handlePaymentAlertClose } = value;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert onClose={handlePaymentAlertClose}>
        This is a success alert — check it out!
      </Alert>
    </div>
  );
};

export default PaymentAlert;
