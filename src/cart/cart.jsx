import React, { useContext } from "react";
import CartItem from "./cart-item";
import PRODUCTS from "../products";
import { ShopContext } from "../context/shop-context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="shop">
      <div className="w-3/4">

      <h1 className="shopTitle"> Cart </h1>
      <div className="content">
        {PRODUCTS.map((element) => {
          if (cartItems[element.id] !== 0) {
            return <CartItem data={element} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className='total'>
        <b>Subtotal: ${totalAmount}</b>
        <p> Tax included. Shipping calculated at checkout </p>
        <button className='addToCartBttn' onClick={() => navigate("/")}> Continue Shopping </button>
        <button className='addToCartBttn'> Check Out </button>
      </div>
      ) : (
        <div className='total'>
          <b>Your cart is empty</b>
          <button className='addToCartBttn' onClick={() => navigate("/")}> Continue Shopping </button>
        </div>
      )}
    </div>
  </div>
  );
};

export default Cart;
