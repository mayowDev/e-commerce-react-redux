import React, { Fragment } from "react";
import Title from "../Title";
import CartColums from "./CartColums";
import EmptyCart from "./EmptyCart";

import CartList from "./CartList";
import CartTotal from "./CartTotal";

// /redux
import { connect } from "react-redux";

const Cart = props => {
  const { cart } = props;
  console.log(cart);
  return (
    <section>
      {cart.length > 0 ? (
        <Fragment>
          <Title name='Your' title='Cart' />
          <CartColums />
          <CartList cart={cart} />
          <CartTotal cart={cart} />
        </Fragment>
      ) : (
        <EmptyCart />
      )}

      {/* {value => {
        // const { cart } = value;
        if (cart.length > 0) {
          return (
            <Fragment>
              <Title name='Your' title='Cart' />
              <CartColums />
              <CartList value={value} />
              <CartTotal value={value} />
            </Fragment>
          );
        } else {
          return <EmptyCart />;
        }
      }} */}
    </section>
  );
};

const mapStateToProps = state => ({
  cart: state.reducer.cart
});

export default connect(mapStateToProps)(Cart);
