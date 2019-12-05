import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Product from "./Product";
import { setProducts } from "../Actions/Action";
import Title from "./Title";

const ProductList = ({ products, setProducts, cart }) => {
  console.log("products", products);
  console.log("cart", cart);
  useEffect(() => {
    setProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className='py-5'>
        <div className='container'>
          <Title name='Our' title='Products' />
          <div className='row'>
            {products.map(product => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
  setProduct: PropTypes.func
};

const mapStateToProps = state => ({
  // this comes from rootreducer for sure
  products: state.reducer.products,
  cart: state.reducer.cart
});

const mapDispatchToProps = dispatch => {
  return {
    setProducts: id => {
      dispatch(setProducts(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
