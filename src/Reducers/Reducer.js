import { detailProduct } from "../data";
import {
  SET_PRODUCTS,
  ADD_TOTALS,
  ADD_TO_CART,
  OPEN_MODAL,
  HANDLE_DETAIL,
  CLOSE_MODAL,
  INCREMENT,
  REMOVE_PRODUCT,
  DECREMENT
} from "../Actions/Types";

export const intialState = {
  products: [],
  cart: [],
  detailProduct: detailProduct,
  modal: false,
  modalProduct: detailProduct,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0
};
export default (state = intialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        modal: true
      };
    case HANDLE_DETAIL:
      return {
        ...state,
        detailProduct: action.payload //it was modalProduct
      };
    case OPEN_MODAL:
      return {
        ...state,
        modalProduct: action.payload,
        modal: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: false
      };
    case ADD_TO_CART:
      console.log(action.payload);
      return {
        ...state,
        cart: action.payload,
        // products: [...state.products, action.copyProducts],

        modal: true
      };
    case ADD_TOTALS:
      return {
        ...state,
        cartSubTotal: action.payload,
        cartTax: [...state.cartTax, action.Tax],
        cartTotal: [...state.cartTotal, action.total]
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: action.payload,
        products: [...state.products, action.tempproduct]
      };
    case DECREMENT:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case INCREMENT:
      return {
        ...state,
        cart: action.payload
      };
    default:
      return state;
  }
};

// ===============Logics from productAction======================

// //getItem
// const getItem=(id,products)=>{

//     const product = products.find(item => item.id === id);
//     return product;

// }

/*
    export const addToCart = (id,products,cart) => async dispatch=> {
        // const { products, cart } = initialState;
        let copyProducts = [...products];
        const getitem =getItem(id,products)
        const index = copyProducts.indexOf(getitem);
        const product= copyProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        const newcart= [...cart, product];
        
    
        dispatch({
            type:ADD_TO_CART,
            payload:copyProducts,
            newcart:newcart
            
        },()=>{
            addTotals();
        })
        
      };
    
      
     // addtotals
     export const addTotals = () =>async dispatch=> {
        let subtotal = 0;
        this.state.cart.map((item) => (subtotal += item.total));
        const temptax = subtotal * 0.1;
        const Tax = parseFloat(temptax.toFixed(2));
        const total = subtotal + Tax;
      
        dispatch({
            type:ADD_TOTALS,
            payload:subtotal,
            Tax:Tax,
            total:total
        })
      
      };
      

// ============logic ends here================================
*/
