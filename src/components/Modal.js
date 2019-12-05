// this the modal that pops up when we click inCart
import React from "react";
import styled from "styled-components";

import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { closeModal } from "../Actions/Action";

// MODALPRODUCT IS STATE IN PRODUCTS REDUCER

const Modal = props => {
  const {
    closeModal,
    modalProduct: { img, title, price }
  } = props;
  return (
    <ModalContainer>
      {/*  show={show} onHide={hide} */}
      <div className='container'>
        <div className='row'>
          <div
            id='modal'
            className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize m-5 p-5'
          >
            <h5>item added to cart</h5>
            <img src={img} className='img-fluid' alt='product' />
            <h5>{title}</h5>
            <h5 className='text-mutted'>price : $ {price} </h5>
            <Link to='/'>
              <ButtonContainer onClick={() => closeModal(closeModal)}>
                Continue Shopping
              </ButtonContainer>
            </Link>
            <Link to='/cart'>
              <ButtonContainer cart onClick={() => closeModal(closeModal)}>
                Go to cart
              </ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--mainWhite);
  }
`;
const mapStateToProps = state => ({
  modalProduct: state.products.modalProduct
});

const mapDispatchToProps = dispatch => {
  return {
    closeModal: id => {
      dispatch(closeModal(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
