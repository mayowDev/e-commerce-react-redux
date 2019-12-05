import React from "react";
import CartItem from "./CartItem";

export default function CartList(props) {
  const { cart } = props;
  return (
    <div className='container-fluid'>
      {cart.map(item => {
        console.log("item", item);
        return <CartItem cart={cart} item={item} />;
      })}
    </div>
  );
}
