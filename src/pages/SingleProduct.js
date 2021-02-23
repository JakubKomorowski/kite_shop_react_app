import React, { useContext } from "react";
import ShopContext from "../context";
import { Link } from "react-router-dom";
import SizeSelector from "../components/SizeSelector";
import {
  ProductImg,
  SingleProductWrapper,
  ProductInfoWrapper,
  ProductPrice,
  ProductDescription,
  AdditionalProductsWrapper,
  SingleAdditionalProduct,
  AdditionalProductImg,
  AdditionalProductInfo,
  AdditionalText,
  AdditionalProductPrice,
  ProductName,
  Wrapper,
  StyledCartAlertWoSize,
  AdditionalProductName,
} from "../components/styledComponents/StyledSingleProduct";
import Button from "../components/atoms/Button";
import { buttonsTypes } from "../utils/buttonsTypes";

const SingleProduct = () => {
  const value = useContext(ShopContext);
  const {
    selectedProduct,
    addToCart,
    increaseCartCounter,
    handleIsCartAlertWoSizeOpen,
    selectProduct,
    notSelectedProduct,
    notSelect,
    kiteIdValue,
    handleKiteIdValueDefault,
  } = value;

  return (
    <Wrapper>
      <ul>
        {selectedProduct.map((el, i) => {
          const {
            productImage,
            productDescription,
            productName,
            productPrice,
          } = el;
          return (
            <>
              {i === kiteIdValue - 1 ? (
                <SingleProductWrapper>
                  <ProductImg src={productImage} alt={productName} />
                  <ProductInfoWrapper>
                    <ProductName>{productName}</ProductName>
                    <ProductDescription>
                      {productDescription}
                    </ProductDescription>
                    <SizeSelector />
                    <ProductPrice>${productPrice}</ProductPrice>
                    <Button
                      buttonType={buttonsTypes.addToCart}
                      onClickFn={() => {
                        handleIsCartAlertWoSizeOpen();

                        addToCart(el.productName, el.kiteId);
                        increaseCartCounter();
                      }}
                    >
                      add to cart
                    </Button>
                  </ProductInfoWrapper>
                </SingleProductWrapper>
              ) : null}
            </>
          );
        })}
      </ul>
      <AdditionalText>
        <p>People who have seen this product were also interested in</p>
      </AdditionalText>
      <AdditionalProductsWrapper>
        {notSelectedProduct.map((el, i) => {
          const {
            productCategory,
            kiteId,
            productImage,
            productName,
            productPrice,
          } = el;
          return (
            <SingleAdditionalProduct>
              <Link to={`/products/${productName.replace(/\s/g, "")}`}>
                <AdditionalProductImg
                  onClick={() => {
                    selectProduct(productName, kiteId);
                    notSelect(productName, productCategory);
                    handleKiteIdValueDefault();
                  }}
                  src={productImage}
                  alt={productName}
                />
              </Link>
              <AdditionalProductInfo>
                <AdditionalProductName>{productName}</AdditionalProductName>
                <AdditionalProductPrice>${productPrice}</AdditionalProductPrice>
              </AdditionalProductInfo>
            </SingleAdditionalProduct>
          );
        })}
      </AdditionalProductsWrapper>
      <StyledCartAlertWoSize />
    </Wrapper>
  );
};

export default SingleProduct;
