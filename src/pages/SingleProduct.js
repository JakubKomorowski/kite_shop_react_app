import React, { useContext } from "react";
import ShopContext from "../context";
import CartAlert from "../components/CartAlert";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const SingleProduct = () => {
  const value = useContext(ShopContext);
  const {
    selectedProduct,
    addToCart,
    increaseCartCounter,
    handleIsCartAlertOpen,
    selectProduct,
    notSelectedProduct,
    notSelect,
  } = value;
  const {
    productName,
    productImage,
    productPrice,
    productDescription,
  } = selectedProduct;
  return (
    <div>
      <Link to={routes.products}>Go back to products</Link>
      <h1>Single Product</h1>
      <img src={productImage} alt={productName} />
      <p>{productName}</p>
      <p>{productPrice}</p>
      <p>{productDescription}</p>
      <button
        onClick={() => {
          addToCart(productName);
          increaseCartCounter();
          handleIsCartAlertOpen();
        }}
      >
        add to cart
      </button>
      <CartAlert />
      <p>People who have seen this product were also interested in:</p>
      <ul>
        {notSelectedProduct.map(
          ({ productName, productImage, productPrice, productCategory }) => {
            return (
              <li>
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
                <p>{productPrice}</p>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default SingleProduct;
