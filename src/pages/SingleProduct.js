import React, { useContext } from "react";
import ShopContext from "../context";
import CartAlert from "../components/CartAlert";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import SizeSelector from "../components/SizeSelector";

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
    handleProductQuantityInCart,
    kiteIdValue,
    handleKiteIdValueDefault,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = value;
  // const {
  //   productName,
  //   productImage,
  //   productPrice,
  //   productDescription,
  //   productCategory,
  //   kiteId,
  // } = selectedProduct;

  return (
    <div>
      <Link to={routes.products}>Go back to products</Link>
      <h1>Single Product</h1>

      <ul>
        {selectedProduct.map((el, i) => {
          const {
            productCategory,
            kiteId,
            productImage,
            productDescription,
            productName,
            productPrice,
          } = el;
          return (
            // <li>
            //   {i === kiteIdValue - 1 ? (
            //     <img src={el.productImage} alt={el.productName} />
            //   ) : (
            //     ""
            //   )}
            //   {i === kiteIdValue - 1 ? <p>{el.productName}</p> : ""}
            //   {i === kiteIdValue - 1 ? <p>{el.productPrice}</p> : ""}
            //   {i === kiteIdValue - 1 ? <p>{kiteIdValue} kite id value</p> : ""}
            //   {i === kiteIdValue - 1 ? (
            //     <p>{el.kiteId} selectedProduct kite id</p>
            //   ) : (
            //     ""
            //   )}
            //   {i === kiteIdValue - 1 ? <p>{el.productDescription}</p> : ""}
            //   {i === kiteIdValue - 1 ? (
            //     el.productCategory === "kites" ? (
            //       <SizeSelector />
            //     ) : (
            //       ""
            //     )
            //   ) : (
            //     ""
            //   )}
            //   {i === kiteIdValue - 1 ? (
            //     <button
            //       onClick={() => {
            //         el.productCategory !== "kites"
            //           ? handleProductQuantityInCart(el.productName, el.kiteId)
            //           : handleIsCartAlertOpen();
            //         el.productCategory !== "kites"
            //           ? increaseCartCounter()
            //           : handleIsCartAlertOpen();
            //         handleIsCartAlertOpen();
            //       }}
            //     >
            //       add to cart
            //     </button>
            //   ) : (
            //     ""
            //   )}
            //   {i === kiteIdValue - 1 ? (
            //     <button
            //       onClick={() =>
            //         increaseProductQuantity(el.productName, el.kiteId)
            //       }
            //     >
            //       +
            //     </button>
            //   ) : (
            //     ""
            //   )}
            //   {i === kiteIdValue - 1 ? <p>{el.productQuantity}</p> : ""}
            //   {i === kiteIdValue - 1 ? (
            //     <button
            //       onClick={() =>
            //         decreaseProductQuantity(el.productName, el.kiteId)
            //       }
            //       disabled={el.productQuantity === 1 ? true : false}
            //     >
            //       -
            //     </button>
            //   ) : (
            //     ""
            //   )}
            // </li>
            <>
              {i === kiteIdValue - 1 ? (
                <li>
                  <img src={productImage} alt={productName} />
                  <p>{productName}</p>
                  <p>{productPrice}</p>
                  <p>{kiteIdValue} kite id value</p>
                  <p>{kiteId} selectedProduct kite id</p>
                  <p>{productDescription}</p>
                  {productCategory === "kites" ? <SizeSelector /> : ""}
                  <button
                    onClick={() => {
                      el.productCategory !== "kites"
                        ? handleProductQuantityInCart(el.productName, el.kiteId)
                        : handleIsCartAlertOpen();
                      el.productCategory !== "kites"
                        ? increaseCartCounter()
                        : handleIsCartAlertOpen();
                      handleIsCartAlertOpen();
                    }}
                  >
                    add to cart
                  </button>
                </li>
              ) : null}
            </>
          );
        })}
      </ul>

      <CartAlert />
      <p>People who have seen this product were also interested in:</p>
      <ul>
        {notSelectedProduct.map((el, i) => {
          return (
            <li>
              <Link to={`/products/${el.productName.replace(/\s/g, "")}`}>
                <img
                  onClick={() => {
                    selectProduct(el.productName, el.kiteId);
                    notSelect(el.productName, el.productCategory);
                    handleKiteIdValueDefault();
                  }}
                  src={el.productImage}
                  alt={el.productName}
                  style={{ width: "200px", height: "200px" }}
                />
              </Link>
              <p>{el.productName}</p>
              <p>{el.productPrice}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SingleProduct;
