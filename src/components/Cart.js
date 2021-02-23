import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ShopContext from "../context";
import {
  CartUl,
  CartLi,
  CartImg,
  CartProductQuantity,
  CartAddOneButton,
  CartProductName,
  CartProductPrice,
  CartImgWrapper,
  CartBtnContainer,
  ContinueShoppingBtnWrapper,
  CartTotal,
  AddOneWrapper,
  CartEmpty,
  CartEmptyWrapper,
  CartInfoWrapper,
} from "./styledComponents/StyledCart";
import PayPalExpressBtn from "./PaypalButton";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "./atoms/Button";
import { buttonsTypes } from "../utils/buttonsTypes";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    borderRadius: "20px",
    maxHeight: "84vh",
    overflowY: "auto",
    border: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Cart = () => {
  const classes = useStyles();

  const value = useContext(ShopContext);
  const {
    isCartOpen,
    handleCartClose,
    cart,
    deleteFromCart,
    cartTotal,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = value;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isCartOpen}
      onClose={handleCartClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isCartOpen}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">Your cart</h2>
          <CartUl>
            {cart.map(
              ({
                productName,
                productImage,
                productPrice,
                productQuantity,
                kiteId,
                productCategory,
                productId,
              }) => {
                return (
                  <CartLi key={productId}>
                    <CartImgWrapper>
                      <CartImg src={productImage} alt={productName} />
                    </CartImgWrapper>
                    <CartInfoWrapper>
                      <CartProductName>{productName}</CartProductName>
                      <p>
                        Size:{" "}
                        {productCategory === "kites"
                          ? kiteId === 1
                            ? "5m"
                            : kiteId === 2
                            ? "7m"
                            : "9m"
                          : productCategory === "boards"
                          ? kiteId === 1
                            ? "136cm"
                            : kiteId === 2
                            ? "142cm"
                            : "148cm"
                          : kiteId === 1
                          ? "S"
                          : kiteId === 2
                          ? "M"
                          : "L"}
                      </p>
                    </CartInfoWrapper>
                    <AddOneWrapper>
                      <CartAddOneButton
                        onClick={() =>
                          decreaseProductQuantity(productName, kiteId)
                        }
                        disabled={productQuantity === 1 ? true : false}
                      >
                        -
                      </CartAddOneButton>
                      <CartProductQuantity>
                        {productQuantity}
                      </CartProductQuantity>
                      <CartAddOneButton
                        onClick={() =>
                          increaseProductQuantity(productName, kiteId)
                        }
                      >
                        +
                      </CartAddOneButton>
                    </AddOneWrapper>

                    <CartProductPrice>${productPrice}</CartProductPrice>

                    <IconButton
                      onClick={() =>
                        deleteFromCart(productName, productQuantity, kiteId)
                      }
                      aria-label="delete"
                      className={classes.margin}
                    >
                      <DeleteIcon fontSize="large" />
                    </IconButton>
                  </CartLi>
                );
              }
            )}
          </CartUl>

          {cartTotal === 0 ? (
            <CartEmptyWrapper>
              <CartEmpty>Cart is empty</CartEmpty>
              <Button
                buttonType={buttonsTypes.continueShopping}
                onClickFn={handleCartClose}
              >
                Continue Shopping
              </Button>
            </CartEmptyWrapper>
          ) : (
            <>
              <CartTotal>Total: ${cartTotal}</CartTotal>
              <CartBtnContainer>
                <ContinueShoppingBtnWrapper>
                  <Button
                    buttonType={buttonsTypes.continueShoppingCart}
                    cart={true}
                    onClickFn={handleCartClose}
                  >
                    Continue Shopping
                  </Button>
                </ContinueShoppingBtnWrapper>
                <PayPalExpressBtn />
              </CartBtnContainer>
            </>
          )}
        </div>
      </Fade>
    </Modal>
  );
};
export default Cart;
