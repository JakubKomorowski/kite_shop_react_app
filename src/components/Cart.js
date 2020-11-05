import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ShopContext from "../context";
import { CardUl, CardLi } from "./styledComponents/StyledCart";
import { Link } from "react-router-dom";
import { routes } from "../routes";

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
    height: "84vh",
    width: "24vw",
    overflowY: "scroll",
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
          <CardUl>
            {cart.map(
              ({
                productName,
                productImage,
                productPrice,
                productQuantity,
              }) => {
                return (
                  <CardLi>
                    <img
                      src={productImage}
                      alt={productName}
                      style={{ width: "100px", height: "100px" }}
                    />
                    <p>{productName}</p>
                    <button
                      onClick={() => decreaseProductQuantity(productName)}
                      disabled={productQuantity === 1 ? true : false}
                    >
                      -
                    </button>

                    <p>{productQuantity}</p>
                    <button
                      onClick={() => increaseProductQuantity(productName)}
                    >
                      +
                    </button>
                    <p>{productPrice}$</p>
                    <button
                      onClick={() =>
                        deleteFromCart(productName, productQuantity)
                      }
                    >
                      delete
                    </button>
                  </CardLi>
                );
              }
            )}
          </CardUl>
          {cartTotal === 0 ? (
            <div>
              <p>Cart is empty</p>

              <Link to={routes.products}>
                <button onClick={handleCartClose}>Go to products</button>
              </Link>
            </div>
          ) : (
            <p>{cartTotal}</p>
          )}
        </div>
      </Fade>
    </Modal>
  );
};
export default Cart;
