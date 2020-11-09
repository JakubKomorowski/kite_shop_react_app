import React, { useContext } from "react";
import ShopContext from "../context";

const Product = ({ productName, productImage, productPrice }) => {
  const value = useContext(ShopContext);
  const { addToCart, increaseCartCounter, handleIsCartAlertOpen } = value;
  return (
    <>
      <img
        src={productImage}
        alt={productName}
        style={{ width: "200px", height: "200px" }}
      />
      <p>{productName}</p>
      <p>{productPrice}$</p>
      <button
        onClick={() => {
          addToCart(productName);
          increaseCartCounter();
          handleIsCartAlertOpen();
        }}
      >
        add to cart
      </button>
    </>
  );
};

export default Product;
