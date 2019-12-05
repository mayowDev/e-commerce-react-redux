import {
  ADD_TO_CART,
  ADD_TOTALS,
  SET_PRODUCTS,
  OPEN_MODAL,
  CLOSE_MODAL,
  HANDLE_DETAIL,
  INCREMENT,
  DECREMENT,
  REMOVE_PRODUCT,
  CLEAR_CART
} from "./Types";
import { storeProducts } from "../data";

// setProducts [we used in productList]
export const setProducts = () => async dispatch => {
  let copyProducts = [];
  storeProducts.forEach(item => {
    const singleItem = { ...item };
    copyProducts = [...copyProducts, singleItem];
  });
  //   set products to copyproducts
  dispatch({
    type: SET_PRODUCTS,
    payload: copyProducts
  });
};

// openModal when we click icon cart plus
export const openModal = (id, products) => async dispatch => {
  const product = products.find(item => item.id === id);
  dispatch({
    type: OPEN_MODAL,
    payload: product
  });
};

// handleDetail
export const handleDetail = (id, products) => async dispatch => {
  const product = products.find(item => item.id === id);
  dispatch({
    type: HANDLE_DETAIL,
    payload: product
  });
};

export const addToCart = (id, products, cart) => async dispatch => {
  // var newcart = cart;
  let copyProducts = products;
  const getitem = products.find(item => item.id === id);
  const index = copyProducts.indexOf(getitem);
  const product = copyProducts[index];
  product.inCart = true;
  product.count = 1;
  const price = product.price;
  product.total = price;
  cart.push(product);

  dispatch(
    {
      type: ADD_TO_CART,
      payload: cart,
      copyProducts: copyProducts
    },
    () => {
      addTotals();
    }
  );
};

// addtotals
export const addTotals = cart => async dispatch => {
  let subtotal = 0;
  cart.map(item => (subtotal += item.total));
  const temptax = subtotal * 0.1;
  const Tax = parseFloat(temptax.toFixed(2));
  const total = subtotal + Tax;

  dispatch({
    type: ADD_TOTALS,
    payload: subtotal,
    Tax: Tax,
    total: total
  });
};

// incremant
export const increment = (id, cart) => async dispatch => {
  let copycart = cart;
  // find index of our selecteditem
  const selecteditem = copycart.find(item => item.id === id);
  const index = copycart.indexOf(selecteditem);
  const product = copycart[index];

  // change count and total based on incremented item
  product.count = product.count + 1;
  product.total = product.count * product.price;

  dispatch(
    {
      type: INCREMENT,
      payload: copycart
    },
    () => {
      addTotals();
    }
  );
};

// decrement
export const decrement = (id, cart) => async dispatch => {
  let copycart = cart;
  const selecteditem = cart.find(item => item.id === id);
  const index = copycart.indexOf(selecteditem);
  const product = copycart[index];

  // change count and total based on incremented item
  product.count = product.count - 1;

  // check if product is less than 0 then remove

  if (product.count === 0) {
    removeProduct(id);
  } else {
    product.total = product.count * product.price;

    dispatch(
      {
        type: DECREMENT,
        payload: copycart
      },
      () => {
        addTotals();
      }
    );
  }
};

// removeproduct
export const removeProduct = (id, products, cart) => async dispatch => {
  let tempproduct = [...products];
  let tempcart = [...cart];

  // filterout selected item
  tempcart = tempcart.filter(item => item.id !== id);
  // find selcted/removed item from products
  const getItem = () => tempproduct.find(item => item.id === id);
  const index = tempproduct.indexOf(getItem(id));
  let removedProduct = tempproduct[index];
  removedProduct.inCart = false;
  removedProduct.count = 0;
  removedProduct.total = 0;
  dispatch(
    {
      type: REMOVE_PRODUCT,
      payload: tempcart,
      tempproduct: tempproduct
    },
    () => {
      addTotals();
    }
  );
};

// clearCart
export const clearCart = cart => async dispatch => {
  dispatch(
    {
      type: CLEAR_CART,
      payload: []
    },
    () => {
      addTotals();
      setProducts();
    }
  );
  // this.setState(
  //   () => {
  //     return { cart: [] };
  //   }
  // );
};

// Sets openModal to true[check in productReducer.js at case:OPEN_MODAL]
export const modal = () => async dispatch => {
  dispatch({
    type: OPEN_MODAL
  });
};

// closeModal
export const closeModal = () => async dispatch => {
  dispatch({
    type: CLOSE_MODAL
  });
};
