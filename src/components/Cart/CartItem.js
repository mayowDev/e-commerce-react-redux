import React from "react";

import { connect } from "react-redux";
import { increment, decrement, removeProduct } from "../../Actions/Action";

function CartItem(props) {
  const {
    increment,
    decrement,
    removeProduct,
    products,
    cart,
    item: { id, title, img, price, total, count }
  } = props;

  return (
    <div className='row my-2 text-capitalize text-center'>
      <div className='col-10 mx-auto col-lg-2'>
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className='img-fluid'
          alt='product'
        />
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>Product:</span>
        {title}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>Price:</span>
        {price}
      </div>

      {/* increment - decrement + count */}
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div>
            <span
              className='btn btn-black mx-1'
              onClick={() => decrement(id, cart)}
            >
              -
            </span>
            <span className='btn btn-black mx-1'>{count}</span>
            <span
              className='btn btn-black mx-1'
              onClick={() => increment(id, cart)}
            >
              +
            </span>
          </div>
        </div>
      </div>
      {/* remove icon */}
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div
          className='cart-icon'
          onClick={() => removeProduct(id, products, cart)}
        >
          <i className='fas fa-trash' />
        </div>
      </div>
      {/* total */}
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <strong> item total : $ {total}</strong>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  // this always comes from rootreduce
  products: state.reducer.products,
  cart: state.reducer.cart
});

const mapDispatchToProps = dispatch => {
  return {
    decrement: (id, cart) => {
      dispatch(decrement(id, cart));
    },
    removeProduct: (id, products, cart) => {
      dispatch(removeProduct(id, products, cart));
    },
    increment: (id, cart) => {
      dispatch(increment(id, cart));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
