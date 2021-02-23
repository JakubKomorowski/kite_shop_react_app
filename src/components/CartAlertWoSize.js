import React, { useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import ShopContext from "../context";
import {
  Wrapper,
  CartAlertImg,
  PriceNameImgWrapper,
  PriceNameWrapper,
  StyledDialogTitle,
  StyledDialogActions,
  StyledProductName,
  StyledProductPrice,
} from "./styledComponents/StyledCartAlert";
import Button from "./atoms/Button";
import { buttonsTypes } from "../utils/buttonsTypes";

const CartAlertWoSize = () => {
  const value = useContext(ShopContext);
  const {
    handleIsCartAlertWoSizeClose,
    isCartAlertWoSizeOpen,
    handleCartOpen,
    selectedProduct,
    kiteIdValue,
  } = value;

  return (
    <>
      <Wrapper>
        {selectedProduct.map((el, i) => {
          const {
            productImage,
            productName,
            productPrice,
            kiteId,
            productCategory,
            productId,
          } = el;
          return (
            <li key={productId}>
              {i === kiteIdValue - 1 ? (
                <Dialog
                  open={isCartAlertWoSizeOpen}
                  onClose={() => {
                    handleIsCartAlertWoSizeClose();
                  }}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <StyledDialogTitle id="alert-dialog-title">
                    {"Product added to the cart"}
                  </StyledDialogTitle>
                  <DialogContent>
                    <PriceNameImgWrapper>
                      <CartAlertImg src={productImage} alt={productName} />
                      <PriceNameWrapper>
                        <StyledProductName>{productName}</StyledProductName>

                        <StyledProductPrice style={{ fontSize: "1rem" }}>
                          {" "}
                          Size:{" "}
                          <span style={{ fontWeight: 700 }}>
                            {" "}
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
                          </span>{" "}
                        </StyledProductPrice>
                        <StyledProductPrice>
                          Price:{" "}
                          <span style={{ fontWeight: 700 }}>
                            ${productPrice}
                          </span>
                        </StyledProductPrice>
                      </PriceNameWrapper>
                    </PriceNameImgWrapper>
                  </DialogContent>
                  <DialogActions>
                    <StyledDialogActions>
                      <Button
                        buttonType={buttonsTypes.continueShopping}
                        onClickFn={() => {
                          handleIsCartAlertWoSizeClose();
                        }}
                      >
                        Continue shopping
                      </Button>
                      <Button
                        buttonType={buttonsTypes.addToCartOutlined}
                        onClickFn={() => {
                          handleIsCartAlertWoSizeClose();
                          handleCartOpen();
                        }}
                      >
                        Go to cart
                      </Button>
                    </StyledDialogActions>
                  </DialogActions>
                </Dialog>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </Wrapper>
    </>
  );
};

export default CartAlertWoSize;
