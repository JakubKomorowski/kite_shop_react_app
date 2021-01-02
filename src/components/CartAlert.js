import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import ShopContext from "../context";
import SizeSelector from "./SizeSelector";

const CartAlert = () => {
  const value = useContext(ShopContext);
  const {
    handleIsCartAlertClose,
    isCartAlertOpen,
    handleCartOpen,
    selectedProduct,
    decreaseProductQuantity,
    increaseProductQuantity,
    increaseCartCounter,
    kiteIdValue,
    addToCart,
    handleProductQuantityInCart,
  } = value;
  // const {
  //   productImage,
  //   productName,
  //   productPrice,
  //   productQuantity,

  //   productCategory,
  //   kiteId,
  // } = selectedProduct;

  return (
    <>
      <ul>
        {selectedProduct.map((el, i) => {
          return (
            <li>
              {i === kiteIdValue - 1 ? (
                <Dialog
                  open={isCartAlertOpen}
                  onClose={() => {
                    handleIsCartAlertClose();
                    // handleProductQuantityInCart(el.productName, el.kiteId);
                    el.productCategory !== "kites"
                      ? addToCart(el.productName, el.kiteId)
                      : handleIsCartAlertClose();
                  }}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Product added to the cart"}
                  </DialogTitle>
                  <DialogContent>
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={el.productImage}
                      alt={el.productName}
                    />
                    <p>{el.productName}</p>
                    <p>{el.productPrice}</p>
                    {el.productCategory === "kites" ? <SizeSelector /> : ""}

                    {/* <button
                      onClick={() =>
                        increaseProductQuantity(el.productName, el.kiteId)
                      }
                    >
                      +
                    </button>
                    <p>{el.productQuantity}</p>
                    <button
                      onClick={() =>
                        decreaseProductQuantity(el.productName, el.kiteId)
                      }
                      disabled={el.productQuantity === 1 ? true : false}
                    >
                      -
                    </button> */}
                  </DialogContent>
                  <DialogActions>
                    <button
                      onClick={() => {
                        handleIsCartAlertClose();
                        addToCart(el.productName, el.kiteId);
                      }}
                    >
                      Continue shopping
                    </button>
                    <button
                      onClick={() => {
                        el.productCategory === "kites"
                          ? handleProductQuantityInCart(
                              el.productName,
                              el.kiteId
                            )
                          : handleCartOpen();
                        handleIsCartAlertClose();
                        handleCartOpen();
                        //dodalem to
                        addToCart(el.productName, el.kiteId);
                        el.productCategory === "kites"
                          ? increaseCartCounter()
                          : handleCartOpen();
                        // handleProductQuantityInCart(el.productName, el.kiteId);
                      }}
                    >
                      {el.productCategory === "kites"
                        ? "Add to Cart"
                        : "Go to cart"}
                    </button>
                  </DialogActions>
                </Dialog>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
      {/* <Dialog
      open={isCartAlertOpen}
      onClose={() => {
        handleIsCartAlertClose();
        addToCart(productName, productCategory, productPrice);
      }}
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
        {productCategory === "kites" ? <SizeSelector /> : ""}

        <button onClick={() => increaseProductQuantity(productName)}>+</button>
        <p>{productQuantity}</p>
        <button
          onClick={() => decreaseProductQuantity(productName)}
          disabled={productQuantity === 1 ? true : false}
        >
          -
        </button>
      </DialogContent>
      <DialogActions>
        <button
          onClick={() => {
            handleIsCartAlertClose();
            addToCart(productName, productCategory, productPrice);
          }}
        >
          Continue shopping
        </button>
        <button
          onClick={() => {
            handleIsCartAlertClose();
            handleCartOpen();
            //dodalem to
            addToCart(productName);
          }}
        >
          Go to cart
        </button>
      </DialogActions>
    </Dialog> */}
    </>
  );
};

export default CartAlert;
