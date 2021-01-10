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
  productPrice,
  freeDelivery,
  productCategory,
}) => {
  const value = useContext(ShopContext);
  const {
    handleIsCartAlertOpen,
    selectProduct,
    notSelect,
    handleKiteIdValueDefault,
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
            selectProduct(productName);
            handleIsCartAlertOpen();
            handleKiteIdValueDefault();
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
