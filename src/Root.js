import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import MainTemplate from "./templates/MainTemplate";
import { routes } from "./routes";
import ShopContext from "./context";
import { productsData } from "./localData";

const Root = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([...productsData]);
  const [cartCounter, setCartCounter] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [isCartAlertOpen, setIsCartAlertOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const increaseCartCounter = () => {
    setCartCounter(cartCounter + 1);
  };

  const decreaseCartCounter = () => {
    if (cartCounter > 0) {
      setCartCounter(cartCounter - 1);
    }
  };

  const handleIsCartAlertOpen = () => {
    setIsCartAlertOpen(true);
  };

  const handleIsCartAlertClose = () => {
    setIsCartAlertOpen(false);
  };

  const addToCart = (name) => {
    const filteredProduct = products.find((el) => el.productName === name);
    if (cart.includes(filteredProduct)) {
      filteredProduct.productQuantity = filteredProduct.productQuantity + 1;
    }
    setCart([...new Set([...cart, filteredProduct])]);
    setSelectedProduct(filteredProduct);
  };

  const deleteFromCart = (name, quantity) => {
    const filteredProduct = cart.filter((el) => {
      if (el.productName === name) {
        el.productQuantity = 1;
      }
      return el.productName !== name;
    });
    setCart([...filteredProduct]);
    setCartCounter(cartCounter - quantity);
  };

  const calculateCartTotal = () => {
    let total = 0;
    cart.forEach((el) => {
      total = total + el.productPrice * el.productQuantity;
    });
    setCartTotal(total);
  };

  useEffect(() => {
    calculateCartTotal();
  }, [cart]);

  const increaseProductQuantity = (name) => {
    const mapedCart = cart.map((el) => {
      if (el.productName === name) {
        el.productQuantity = el.productQuantity + 1;
      }
      return el;
    });
    increaseCartCounter();
    setCart([...mapedCart]);
  };

  const decreaseProductQuantity = (name) => {
    const mapedCart = cart.map((el) => {
      if (el.productName === name) {
        el.productQuantity = el.productQuantity - 1;
      }
      return el;
    });
    decreaseCartCounter();
    setCart([...mapedCart]);
  };

  return (
    <BrowserRouter>
      <ShopContext.Provider
        value={{
          isCartOpen,
          handleCartOpen,
          handleCartClose,
          addToCart,
          cart,
          products,
          deleteFromCart,
          cartCounter,
          increaseCartCounter,
          decreaseCartCounter,
          cartTotal,
          increaseProductQuantity,
          decreaseProductQuantity,
          handleIsCartAlertOpen,
          handleIsCartAlertClose,
          isCartAlertOpen,
          selectedProduct,
        }}
      >
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.about} component={About} />
            <Route exact path={routes.products} component={Products} />
            <Route path={routes.contact} component={Contact} />
            <Route path={routes.singleProduct} component={SingleProduct} />
          </Switch>
        </MainTemplate>
      </ShopContext.Provider>
    </BrowserRouter>
  );
};

export default Root;
