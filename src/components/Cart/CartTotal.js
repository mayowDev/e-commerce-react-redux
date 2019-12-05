import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { clearCart } from "../../Actions/Action";

function CartTotal(props) {
  const { clearCart, cartSubTotal, cartTax, cartTotal } = props;
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          {/* clear btn  */}
          <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-8 text-capitalize text-right'>
            <Link to='/'>
              <button
                className='btn btn-outline-danger text-uppercase mb-3 px-5'
                type='buttton'
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </Link>
            <h5>
              <span className='text-title'>subtotal:</span>
              <strong>${cartSubTotal}</strong>
            </h5>
            <h5>
              <span className='text-title'>Tax:</span>
              <strong>${cartTax}</strong>
            </h5>
            <h5>
              <span className='text-title'>cartTotal:</span>
              <strong>${cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  cartTax: state.reducer.cartTax,
  cartSubTotal: state.reducer.cartSubTotal,
  cartTotal: state.reducer.cartTax
});
const mapDispatchToProps = dispatch => {
  return {
    clearCart: id => {
      dispatch(clearCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTotal);
