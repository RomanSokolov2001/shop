import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import DropdownSizes from "../components/DropdownSizes";
import { ShopContext } from "../utils/shop-context";

const ProductPage = () => {
  const { isBurgerClicked, size } = useContext(ShopContext);
  const location = useLocation();
  const { id, productName, price, productImage, sizes } = location.state;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="w-3/4" hidden={isBurgerClicked}>
      <div className="product-page">
        <img className="product-img w-1/2" src={productImage} />
        <div className="product-desc w-1/2">
          <b>{productName}</b>
          <br /> <b>{price}$</b>
          <p>Tax included. Shipping calculated at checkout.</p>
          <b>Description:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            delectus rem veniam deleniti architecto, modi repudiandae ea quo est
            praesentium fugiat consectetur eligendi, dolorem cumque nostrum!
            Saepe possimus consequatur cupiditate.
          </p>
          <p className="mb-0">size:</p>
          <DropdownSizes data={sizes} />
          <button
            className="addToCartBttn hover:scale-110 transition ease-out duration-300"
            onClick={() => addToCart(id)}
          >
            <p className="mb-2">
              Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}{" "}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
