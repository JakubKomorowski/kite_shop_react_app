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
  const getCartFromLocalStorage = () => {
    let localStorageCart;

    if (localStorage.getItem("cart")) {
      localStorageCart = JSON.parse(localStorage.getItem("cart"));
    } else {
      localStorageCart = [];
    }

    return localStorageCart;
  };

  const getCartCounterFromLocalStorage = () => {
    let localStorageCounter;

    if (localStorage.getItem("cartCounter")) {
      localStorageCounter = JSON.parse(localStorage.getItem("cartCounter"));
    } else {
      localStorageCounter = 0;
    }
    return localStorageCounter;
  };

  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([...productsData]);
  const [cartCounter, setCartCounter] = useState(
    getCartCounterFromLocalStorage()
  );
  const [cartTotal, setCartTotal] = useState(0);
  const [isCartAlertOpen, setIsCartAlertOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [notSelectedProduct, setNotSelectedProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [isPaymentAlertOpen, setIsPaymentAlertOpen] = useState(false);

  // filter states
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([
    Math.min(...products.map((el) => el.productPrice)),
    Math.max(...products.map((el) => el.productPrice)),
  ]);
  const [search, setSearch] = useState("");
  const [freeDelivery, setFreeDelivery] = useState(false);

  useEffect(() => {
    setCartToLocalStorage();
    setCartCounterToLocalStorage();
  }, [cart, cartCounter]);

  const setCartToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const setCartCounterToLocalStorage = () => {
    localStorage.setItem("cartCounter", JSON.stringify(cartCounter));
  };

  const handleFreeDeliveryChange = (e) => {
    setFreeDelivery(e.target.checked);
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handlePriceChange = (event, newPrice) => {
    setPriceRange(newPrice);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filterProducts = () => {
    let tempProducts = [...products];

    //delivery
    if (freeDelivery) {
      tempProducts = tempProducts.filter((el) => el.freeDelivery === true);
    }
    //search
    if (search !== "") {
      tempProducts = tempProducts.filter((el) => {
        return (
          el.productName.toLowerCase().startsWith(search.toLowerCase()) === true
        );
      });
    }
    //price
    tempProducts = tempProducts.filter((el) => {
      return (
        el.productPrice >= priceRange[0] && el.productPrice <= priceRange[1]
      );
    });
    //category
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (el) => el.productCategory === category
      );
    }

    setFilteredProducts(tempProducts);
  };

  useEffect(() => {
    filterProducts();
  }, [category, priceRange, search, freeDelivery]);

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
    selectProduct(name);
  };

  const selectProduct = (name) => {
    const filteredProduct = products.find((el) => el.productName === name);

    setSelectedProduct(filteredProduct);
  };

  const notSelect = (name, category) => {
    const secondFilteredProduct = products.filter(
      (el) => el.productCategory === category && el.productName !== name
    );

    console.log(secondFilteredProduct);
    setNotSelectedProduct([...secondFilteredProduct]);
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

  const clearCartAndCartCounter = () => {
    setCart([]);
    setCartCounter(0);
    setIsPaymentAlertOpen(true);
  };

  const handlePaymentAlertClose = () => {
    setIsPaymentAlertOpen(false);
  };

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
          filteredProducts,
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
          category,
          handleCategoryChange,
          priceRange,
          handlePriceChange,
          handleSearchChange,
          search,
          clearCartAndCartCounter,
          isPaymentAlertOpen,
          handlePaymentAlertClose,
          handleFreeDeliveryChange,
          freeDelivery,
          selectProduct,
          selectedProduct,
          notSelect,
          notSelectedProduct,
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
