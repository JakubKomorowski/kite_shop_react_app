import React, { useContext } from "react";
import PayPalExpressBtn from "react-paypal-express-checkout";
import ShopContext from "../context";

const PaypalButton = () => {
  const value = useContext(ShopContext);
  const { cartTotal, clearCartAndCartCounter, handleCartClose } = value;
  const client = {
    sandbox:
      "AX2LL6PcHSc3ZBtr6Uf3qmBMrM0WFtePmOkR8X1-ZMPi2r59ByzaWnIYEJF717yG-G5Rw2FHd-TBg4hO",
    production: "",
  };

  const onSuccessPaymet = (payment) => {
    console.log(payment);
    handleCartClose();
    clearCartAndCartCounter();
  };

  const onCancelPayment = (message) => {
    console.log(message);
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
