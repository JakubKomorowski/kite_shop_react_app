import React, { useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import ShopContext from "../context";
import SizeSelector from "./SizeSelector";
import {
  Wrapper,
  CartAlertImg,
  PriceNameImgWrapper,
  PriceNameWrapper,
  SizeSelectorWrapper,
  StyledDialogTitle,
  StyledDialogActions,
  StyledProductName,
  StyledProductPrice,
} from "./styledComponents/StyledCartAlert";
import Button from "./atoms/Button";
import { buttonsTypes } from "../utils/buttonsTypes";

const CartAlert = () => {
  const value = useContext(ShopContext);
  const {
    handleIsCartAlertClose,
    isCartAlertOpen,
    selectedProduct,
    increaseCartCounter,
    kiteIdValue,
    addToCart,
    handleIsCartAlertWoSizeOpen,
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
            productId,
          } = el;
          return (
            <li key={productId}>
              {i === kiteIdValue - 1 ? (
                <Dialog
                  open={isCartAlertOpen}
                  onClose={() => {
                    handleIsCartAlertClose();
                  }}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <StyledDialogTitle id="alert-dialog-title">
                    {"Choose a size"}
                  </StyledDialogTitle>
                  <DialogContent>
                    <PriceNameImgWrapper>
                      <CartAlertImg src={productImage} alt={productName} />
                      <PriceNameWrapper>
                        <StyledProductName>{productName}</StyledProductName>
                        <StyledProductPrice>
                          Price:{" "}
                          <span style={{ fontWeight: 700 }}>
                            ${productPrice}
                          </span>
                        </StyledProductPrice>
                      </PriceNameWrapper>
                    </PriceNameImgWrapper>
                    <SizeSelectorWrapper>
                      <SizeSelector />
                    </SizeSelectorWrapper>
                  </DialogContent>
                  <DialogActions>
                    <StyledDialogActions>
                      <Button
                        buttonType={buttonsTypes.continueShopping}
                        onClickFn={() => {
                          handleIsCartAlertClose();
                        }}
                      >
                        Continue shopping
                      </Button>
                      <Button
                        buttonType={buttonsTypes.addToCartOutlined}
                        onClickFn={() => {
                          handleIsCartAlertClose();
                          addToCart(productName, kiteId);
                          increaseCartCounter();
                          handleIsCartAlertWoSizeOpen();
                        }}
                      >
                        Add to cart
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

export default CartAlert;
