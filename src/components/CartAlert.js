import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import ShopContext from "../context";

const CartAlert = () => {
  const value = useContext(ShopContext);
  const {
    handleIsCartAlertClose,
    isCartAlertOpen,
    handleCartOpen,
    selectedProduct,
    decreaseProductQuantity,
    increaseProductQuantity,
  } = value;
  const {
    productImage,
    productName,
    productPrice,
    productQuantity,
  } = selectedProduct;
  return (
    <Dialog
      open={isCartAlertOpen}
      onClose={handleIsCartAlertClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Product added to the cart"}
      </DialogTitle>
      <DialogContent>
        <img
          style={{ width: "100px", height: "100px" }}
          src={productImage}
          alt={productName}
        />
        <p>{productName}</p>
        <p>{productPrice}</p>
        <button
          onClick={() => decreaseProductQuantity(productName)}
          disabled={productQuantity === 1 ? true : false}
        >
          -
        </button>

        <p>{productQuantity}</p>
        <button onClick={() => increaseProductQuantity(productName)}>+</button>
      </DialogContent>
      <DialogActions>
        <button onClick={handleIsCartAlertClose}>Go shop</button>
        <button
          onClick={() => {
            handleIsCartAlertClose();
            handleCartOpen();
          }}
        >
          Go to cart
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default CartAlert;
