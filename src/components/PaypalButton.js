import React, { useContext } from "react";
import PayPalExpressBtn from "react-paypal-express-checkout";
import ShopContext from "../context";
import { alertColorOptions } from "../utils/alertColorOptions";

const PaypalButton = () => {
  const value = useContext(ShopContext);
  const {
    cartTotal,
    clearCartAndCartCounter,
    handleCartClose,
    showAndCloseAlertAfterTimeWithContentAndType,
  } = value;
  const client = {
    sandbox: process.env.REACT_APP_SANDBOX_ID,
    production: "",
  };

  const onSuccessPaymet = (payment) => {
    console.log(payment);
    handleCartClose();
    clearCartAndCartCounter();
  };

  const onCancelPayment = (message) => {
    console.log(message);
    showAndCloseAlertAfterTimeWithContentAndType(
      4000,
      "Payment cancelled",
      alertColorOptions.warning
    );
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <PayPalExpressBtn
      env="sandbox"
      currency="USD"
      client={client}
      onSuccess={onSuccessPaymet}
      onCancel={onCancelPayment}
      onError={onError}
      total={cartTotal}
    />
  );
};

export default PaypalButton;
