import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../context";
import {
  Wrapper,
  ProductImg,
  ProductTitle,
  ProductPrice,
  AddToCartBtn,
  ViewBtn,
  ProductWrapper,
} from "./styledComponents/StyledProduct";

const Product = ({
  productName,
  productImage,
  kiteId,
  productPrice,
  freeDelivery,
  productCategory,
}) => {
  const value = useContext(ShopContext);
  const {
    addToCart,
    increaseCartCounter,
    handleIsCartAlertOpen,
    selectProduct,
    notSelect,
    kiteIdValue,
    handleProductQuantityInCart,
    handleKiteIdValueDefault,
    selectKite,
  } = value;

  return (
    <Wrapper>
      <ProductWrapper>
        <Link to={`/products/${productName.replace(/\s/g, "")}`}>
          <ProductImg
            onClick={() => {
              selectProduct(productName);
              notSelect(productName, productCategory);
              handleKiteIdValueDefault();
              // selectKite(productName);
            }}
            src={productImage}
            alt={productName}
          />
        </Link>

        <ProductTitle>{productName}</ProductTitle>

        <ProductPrice>{productPrice}$</ProductPrice>
        <p>{freeDelivery ? "Free Delivery" : ""}</p>
      </ProductWrapper>
      <div>
        <AddToCartBtn
          onClick={() => {
            productCategory !== "kites"
              ? handleProductQuantityInCart(productName, kiteId)
              : selectProduct(productName);

            selectProduct(productName);

            handleIsCartAlertOpen();
            handleKiteIdValueDefault();
            // increaseCartCounter();
            productCategory !== "kites"
              ? increaseCartCounter()
              : selectProduct(productName);

            // productCategory !== "kites"
            //   ? addToCart(productName, kiteId)
            //   : selectProduct(productName);
          }}
        >
          add to cart
        </AddToCartBtn>
        <Link to={`/products/${productName.replace(/\s/g, "")}`}>
          <ViewBtn
            onClick={() => {
              selectProduct(productName);
              notSelect(productName, productCategory);
              handleKiteIdValueDefault();
              // productCategory !== "kites"
              //   ? addToCart(productName, kiteId)
              //   : selectProduct(productName);
            }}
          >
            view
          </ViewBtn>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Product;
