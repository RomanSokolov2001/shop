import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  // product, description, addToCartBttn
  return (
    <div className="product hover:shadow-2xl">
      <img src={productImage} />
      <div className='description'>
        <b>{productName}</b> 
        <p>${price}</p>
      </div>
      <button className='addToCartBttn hover:scale-110 transition ease-out duration-300' onClick={() => addToCart(id)}>
        {" "}
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
