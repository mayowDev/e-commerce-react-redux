import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductWrapper } from "./ProductWrapper";

// redux
import { connect } from "react-redux";
import { handleDetail, openModal, addToCart } from "../Actions/Action";

const Product = props => {
  const isAddToCard = props.cart.find(itm => console.log(itm.id));

  const {
    handleDetail,
    products,
    openModal,
    addToCart,
    product: { id, title, img, price, inCart },
    cart
  } = props;
  console.log("cart", cart);
  return (
    <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
      {/* single product */}
      <div className='card'>
        <div
          className='img-container p-5'
          onClick={() => handleDetail(id, products)}
        >
          <Link to='/details'>
            <img src={img} alt='product' className='card-img-top' />
          </Link>
          {/* cart-plus button */}
          <button
            className='cart-btn'
            disabled={inCart ? true : false}
            onClick={() => {
              addToCart(id, products, cart);
              openModal(id, products);
            }}
          >
            {isAddToCard ? (
              <p className='text-capitalize mb-0' disabled>
                inCart
              </p>
            ) : (
              <i className='fas fa-cart-plus' />
            )}
          </button>
        </div>

        {/* cart footer */}
        <div className='card-footer d-flex justify-content-between'>
          <p className='align-self-center mb-0'>{title}</p>
          <h5 className='text-blue font-italic mb-0'>
            <span className='mr-1'>$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};

Product.propTypes = {
  addToCart: PropTypes.func,
  handleDetail: PropTypes.func,
  openModal: PropTypes.func,
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const mapStateToProps = state => ({
  // this always comes from rootreduce
  products: state.reducer.products,
  cart: state.reducer.cart
});

const mapDispatchToProps = dispatch => {
  return {
    openModal: (id, products) => {
      dispatch(openModal(id, products));
    },
    handleDetail: (id, products) => {
      dispatch(handleDetail(id, products));
    },
    addToCart: (cart, id, products) => {
      dispatch(addToCart(cart, id, products));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
