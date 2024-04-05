import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const CartItem = (props) => {
  const { id, productName, productImage, desc, price } = props.data;
  const { addToCart, removeFromCart, updateCartItemAmount, cartItems } =
    useContext(ShopContext);

  return (
    <div className="product hover:shadow-2xl">
      <img src={productImage} />
      <div className="description">
        <b>{productName}</b>
        <p>${price}</p>
      </div>
      <div className="cart-field">
        <button className='cart-btn' onClick={() => addToCart(id)}>+</button>
        <input className="cart-input"
          value={cartItems[id]}
          onChange={(e) => updateCartItemAmount(Number(e.target.value), id)}
        ></input>
        <button className="cart-btn" onClick={() => removeFromCart(id)}>-</button>
      </div>
    </div>
  );
};

export default CartItem;
