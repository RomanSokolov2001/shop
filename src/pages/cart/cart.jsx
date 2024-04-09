import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./cart-item";
import PRODUCTS from "../../products";
import { ShopContext } from "../../utils/shop-context";

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
          <div className="total">
            <b className="text-2xl">Subtotal: ${totalAmount}</b>
            <p className="text-xl mb-8">
              Tax included. Shipping calculated at checkout
            </p>
            <button
              className="addToCartBttn mb-3"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
            <button className="addToCartBttn"> Check Out </button>
          </div>
        ) : (
          <div className="total">
            <b className="text-2xl w-max mb-4"> Your cart is empty</b>
            <button className="addToCartBttn" onClick={() => navigate("/")}>
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
