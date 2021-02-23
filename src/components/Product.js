import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../components/atoms/Button";
import ShopContext from "../context";
import { buttonsTypes } from "../utils/buttonsTypes";
import {
  Wrapper,
  ProductImg,
  ProductTitle,
  ProductPrice,
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
        <Button
          buttonType={buttonsTypes.addProduct}
          onClickFn={() => {
            selectProduct(productName);
            handleIsCartAlertOpen();
            handleKiteIdValueDefault();
          }}
        >
          add to cart
        </Button>
        <Link to={`/products/${productName.replace(/\s/g, "")}`}>
          <Button
            buttonType={buttonsTypes.view}
            onClickFn={() => {
              selectProduct(productName);
              notSelect(productName, productCategory);
              handleKiteIdValueDefault();
            }}
          >
            view
          </Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Product;
