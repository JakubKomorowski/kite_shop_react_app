import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import SingleProduct from "./pages/SingleProduct";
import MainTemplate from "./templates/MainTemplate";
import { routes } from "./routes";
import ShopContext from "./context";
import { client } from "./contentful";
import Category from "./pages/Category";
import {
  getCartCounterFromLocalStorage,
  getCartFromLocalStorage,
  getNotSelectedProductFromLocalStorage,
  getSelectedProductFromLocalStorage,
  getSelectedCategoryFromLocalStorage,
} from "./utils/localStorageGetters";
import { alertColorOptions } from "./utils/alertColorOptions";
import { useLocation } from "react-router-dom";

const Root = () => {
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartCounter, setCartCounter] = useState(
    getCartCounterFromLocalStorage()
  );
  const [cartTotal, setCartTotal] = useState(0);
  const [isCartAlertOpen, setIsCartAlertOpen] = useState(false);
  const [isCartAlertWoSizeOpen, setIsCartAlertWoSizeOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(
    getSelectedProductFromLocalStorage()
  );
  const [notSelectedProduct, setNotSelectedProduct] = useState(
    getNotSelectedProductFromLocalStorage()
  );
  const [selectedCategory, setSelectedCategory] = useState(
    getSelectedCategoryFromLocalStorage()
  );

  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [allProducts, setAllProducts] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [alertType, setAlertType] = useState(alertColorOptions.default);
  const [oneOfCategory, setOneOfCategory] = useState([]);
  const [openNewsletter, setOpenNewsletter] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth < 760);
  const [kiteIdValue, setKiteIdValue] = useState(1);

  // filter states
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([]);
  const [search, setSearch] = useState("");
  const [freeDelivery, setFreeDelivery] = useState(false);

  //sort state
  const [sortBy, setSortBy] = useState("Sort");

  const setContentfulData = (contentfulItems) => {
    const tempContentfulItems = contentfulItems.map((item) => {
      const productId = item.sys.id;
      const tempProductImage = item.fields.productImage.fields.file.url;

      const product = {
        productId,
        ...item.fields,
      };

      product.productImage = tempProductImage;

      return product;
    });

    const newContentfulItems = tempContentfulItems.filter(
      (thing, index, self) =>
        index === self.findIndex((t) => t.productName === thing.productName)
    );

    setProducts([...newContentfulItems]);

    const uniq = tempContentfulItems.reduce((acc, current) => {
      const x = acc.find(
        (item) => item.productCategory === current.productCategory
      );
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    setOneOfCategory([...uniq]);

    setPriceRange([0, 1000]);
    setFilteredProducts(newContentfulItems);
    setAllProducts(tempContentfulItems);
  };

  const getContentfulData = () => {
    client
      .getEntries({
        content_type: "product",
      })
      .then((res) => {
        setContentfulData(res.items);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getContentfulData();
  }, []);

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

  const updateWindowWidth = () => {
    setWindowSize(window.innerWidth < 760);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", resetFilters);
    window.addEventListener("popstate", handleFilterDrawerClose);
  }, []);

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

  const handleKiteIdValueChange = (e) => {
    setKiteIdValue(e.target.value);
  };

  const handleKiteIdValueDefault = () => {
    setKiteIdValue(1);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleNewsletterOpen = () => {
    setOpenNewsletter(true);
  };

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };
  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleNavMenuOpen = () => {
    setNavMenuOpen(!navMenuOpen);
  };

  const handleNavMenuClose = () => {
    setNavMenuOpen(false);
  };

  const handleFilterDrawerOpen = () => {
    setFilterDrawerOpen(true);
  };

  const handleFilterDrawerClose = () => {
    setFilterDrawerOpen(false);
  };

  const handleNewsletterClose = () => {
    setOpenNewsletter(false);
  };

  useEffect(() => {
    setTimeout(() => {
      handleNewsletterOpen();
    }, 15000);
  }, []);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
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
    if (category !== "All") {
      tempProducts = tempProducts.filter(
        (el) => el.productCategory === category
      );
    }

    //sorting
    if (sortBy === "cheap") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.productPrice - b.productPrice;
      });
    }

    if (sortBy === "expensive") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.productPrice - a.productPrice;
      });
    }

    if (sortBy === "az") {
      tempProducts = tempProducts.sort((a, b) =>
        a.productName.localeCompare(b.productName)
      );
    }

    if (sortBy === "za") {
      tempProducts = tempProducts.sort((a, b) =>
        b.productName.localeCompare(a.productName)
      );
    }

    setFilteredProducts(tempProducts);
  };

  useEffect(() => {
    filterProducts();
  }, [category, priceRange, search, freeDelivery, sortBy]);

  const resetFilters = () => {
    setCategory("All");
    setPriceRange([0, 1000]);
    setSearch("");
    setFreeDelivery(false);
  };

  const filterCategoryProducts = () => {
    let tempProducts = getSelectedCategoryFromLocalStorage();

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

    //sorting
    if (sortBy === "cheap") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.productPrice - b.productPrice;
      });
    }

    if (sortBy === "expensive") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.productPrice - a.productPrice;
      });
    }

    if (sortBy === "az") {
      tempProducts = tempProducts.sort((a, b) =>
        a.productName.localeCompare(b.productName)
      );
    }

    if (sortBy === "za") {
      tempProducts = tempProducts.sort((a, b) =>
        b.productName.localeCompare(a.productName)
      );
    }
    setSelectedCategory(tempProducts);
  };

  useEffect(() => {
    filterCategoryProducts();
  }, [category, priceRange, search, freeDelivery, sortBy]);

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = (name) => {
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

  const handleIsCartAlertWoSizeOpen = () => {
    setIsCartAlertWoSizeOpen(true);
  };

  const handleIsCartAlertWoSizeClose = () => {
    setIsCartAlertWoSizeOpen(false);
  };

  const handleIsCartAlertClose = () => {
    setIsCartAlertOpen(false);
  };

  const addToCart = (name, kiteId) => {
    const filteredProduct = allProducts.find(
      (el) => el.productName === name && el.kiteId === kiteId
    );

    if (cart.length !== 0) {
      cart.forEach((item) => {
        if (item.productName === name && item.kiteId === kiteId) {
          item.productQuantity = item.productQuantity + 1;
        }
      });
    }

    let isProductAlreadyInCart;

    cart.forEach((el) => {
      if (el.productName === name && el.kiteId === kiteId) {
        isProductAlreadyInCart = true;
      }
    });

    if (isProductAlreadyInCart) {
      setCart([...new Set([...cart])]);
    } else {
      setCart([...new Set([...cart, filteredProduct])]);
    }

    selectProduct(name);
  };

  const selectProduct = (name) => {
    const filteredProduct = allProducts.filter((el) => el.productName === name);
    console.log(filteredProduct.kiteId);
    setSelectedProduct([...filteredProduct]);
    localStorage.setItem("selectedProduct", JSON.stringify(filteredProduct));
  };

  const notSelect = (name, category) => {
    const secondFilteredProduct = products.filter(
      (el) => el.productCategory === category && el.productName !== name
    );
    setNotSelectedProduct([...secondFilteredProduct]);
    localStorage.setItem(
      "notSelectedProduct",
      JSON.stringify(secondFilteredProduct)
    );
  };

  const selectCategory = (category) => {
    const productsFromCategory = products.filter(
      (el) => el.productCategory === category
    );
    setSelectedCategory([...productsFromCategory]);
    localStorage.setItem(
      "selectedCategory",
      JSON.stringify(productsFromCategory)
    );
  };

  const deleteFromCart = (name, quantity, kiteId) => {
    const filteredProduct = cart.filter((el) => {
      if (el.productName === name && el.kiteId === kiteId) {
        el.productQuantity = 1;
      }
      return el.productName !== name || el.kiteId !== kiteId;
    });
    setCart([...filteredProduct]);
    setCartCounter(cartCounter - quantity);
  };

  const calculateCartTotal = () => {
    let total = 0;
    cart.forEach((el) => {
      total =
        Math.round((total + el.productPrice * el.productQuantity) * 100) / 100;
    });

    setCartTotal(total);
  };

  useEffect(() => {
    calculateCartTotal();
  }, [cart]);

  const showAndCloseAlertAfterTimeWithContentAndType = (
    time,
    content,
    type
  ) => {
    setIsAlertOpen(true);
    setAlertContent(content);
    setAlertType(type);
    setTimeout(() => {
      handleAlertClose();
    }, time);
  };

  const clearCartAndCartCounter = () => {
    setCart([]);
    setCartCounter(0);
    showAndCloseAlertAfterTimeWithContentAndType(
      5000,
      "Payment succeed!",
      alertColorOptions.success
    );
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  const increaseProductQuantity = (name, kiteId) => {
    const mapedCart = cart.map((el) => {
      if (el.productName === name && el.kiteId === kiteId) {
        el.productQuantity = el.productQuantity + 1;
      }
      return el;
    });
    increaseCartCounter();
    setCart([...mapedCart]);
  };

  const decreaseProductQuantity = (name, kiteId) => {
    const mapedCart = cart.map((el) => {
      if (el.productName === name && el.kiteId === kiteId) {
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
          isAlertOpen,
          handleAlertClose,
          handleFreeDeliveryChange,
          freeDelivery,
          selectProduct,
          notSelect,
          notSelectedProduct,
          handleSortChange,
          oneOfCategory,
          selectCategory,
          selectedCategory,
          handleNewsletterOpen,
          handleNewsletterClose,
          openNewsletter,
          handleMenuOpen,
          handleMenuClose,
          menuOpen,
          showAndCloseAlertAfterTimeWithContentAndType,
          alertContent,
          alertType,
          windowSize,
          handleFilterDrawerOpen,
          filterDrawerOpen,
          kiteIdValue,
          handleKiteIdValueChange,
          handleNavMenuOpen,
          navMenuOpen,
          handleKiteIdValueDefault,
          handleNavMenuClose,
          allProducts,
          handleIsCartAlertWoSizeOpen,
          handleIsCartAlertWoSizeClose,
          isCartAlertWoSizeOpen,
          resetFilters,
          handleFilterDrawerClose,
        }}
      >
        <MainTemplate>
          <ScrollToTop />
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route exact path={routes.products} component={Products} />
            <Route path={routes.contact} component={Contact} />
            <Route path={routes.singleProduct} component={SingleProduct} />
            <Route exact path={routes.categories} component={Categories} />
            <Route path={routes.category} component={Category} />
          </Switch>
        </MainTemplate>
      </ShopContext.Provider>
    </BrowserRouter>
  );
};

export default Root;
