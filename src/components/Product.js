import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../context";

const Product = ({
  productName,
  productImage,
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
  } = value;
  return (
    <>
      <Link to={`/products/${productName.replace(/\s/g, "")}`}>
        <img
          onClick={() => {
            selectProduct(productName);
            notSelect(productName, productCategory);
          }}
          src={productImage}
          alt={productName}
          style={{ width: "200px", height: "200px" }}
        />
      </Link>
      <p>{productName}</p>
      <p>{productPrice}$</p>
      <p>{freeDelivery ? "Free Delivery" : ""}</p>
      <button
        onClick={() => {
          addToCart(productName);
          increaseCartCounter();
          handleIsCartAlertOpen();
        }}
      >
        add to cart
      </button>
      <Link to={`/products/${productName.replace(/\s/g, "")}`}>
        <button
          onClick={() => {
            selectProduct(productName);
            notSelect(productName, productCategory);
          }}
        >
          view
        </button>
      </Link>
    </>
  );
};

export default Product;
