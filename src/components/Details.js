import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

// redux
import { connect } from "react-redux";
import { handleDetail, addToCart } from "../Actions/Action";

const Details = props => {
  const {
    addToCart,
    openModal,
    detailProduct: { title, inCart, img, info, price, id, company }
  } = props;

  return (
    <div className='container py-5'>
      {/* title start*/}
      <div className='row'>
        <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
          <h1>{title}</h1>
        </div>
      </div>
      {/* end title */}
      {/* product info start */}
      <div className='row'>
        <div className='col-10 col-md-6 mx-auto my-3 '>
          <img src={img} alt='product' className='img-fluid' />
        </div>
        {/* product text */}
        <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
          <h2>model :{title}</h2>
          <h4 className='text-title text-muted text-uppercase mt-3 mb-2'>
            made by <span className='text-uppercase'>{company}</span>
          </h4>
          <h4 className='text-blue'>
            <strong>
              Price <span>$ </span>
              {price}
            </strong>
          </h4>
          <p className='text-capitalize font-weight-bold mt-3 mb-0'>
            info about the product
          </p>
          <p className='text-muted lead'>{info}</p>
          {/* buttons */}
          <div>
            <Link to='/'>
              <ButtonContainer>Back to products</ButtonContainer>
            </Link>
            <ButtonContainer
              cart
              disabled={inCart ? true : false}
              onClick={() => {
                addToCart(id);
                openModal(id);
              }}
            >
              {inCart ? "inCart" : "Add to cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  detailProduct: state.reducer.detailProduct
});

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    },
    handleDetail: id => {
      dispatch(handleDetail(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
