export const getCartFromLocalStorage = () => {
  let localStorageCart;

  if (localStorage.getItem("cart")) {
    localStorageCart = JSON.parse(localStorage.getItem("cart"));
  } else {
    localStorageCart = [];
  }

  return localStorageCart;
};

export const getCartCounterFromLocalStorage = () => {
  let localStorageCounter;

  if (localStorage.getItem("cartCounter")) {
    localStorageCounter = JSON.parse(localStorage.getItem("cartCounter"));
  } else {
    localStorageCounter = 0;
  }
  return localStorageCounter;
};

export const getSelectedProductFromLocalStorage = () => {
  let selectedProductLocalStorage;

  if (localStorage.getItem("selectedProduct")) {
    selectedProductLocalStorage = JSON.parse(
      localStorage.getItem("selectedProduct")
    );
  } else {
    selectedProductLocalStorage = [];
  }
  return selectedProductLocalStorage;
};

export const getNotSelectedProductFromLocalStorage = () => {
  let notSelectedProductLocalStorage;

  if (localStorage.getItem("notSelectedProduct")) {
    notSelectedProductLocalStorage = JSON.parse(
      localStorage.getItem("notSelectedProduct")
    );
  } else {
    notSelectedProductLocalStorage = [];
  }

  return notSelectedProductLocalStorage;
};

export const getSelectedCategoryFromLocalStorage = () => {
  let selectedCategoryLocalStorage;

  if (localStorage.getItem("selectedCategory")) {
    selectedCategoryLocalStorage = JSON.parse(
      localStorage.getItem("selectedCategory")
    );
  } else {
    selectedCategoryLocalStorage = [];
  }

  return selectedCategoryLocalStorage;
};
