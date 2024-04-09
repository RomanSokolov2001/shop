import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, productName, productImage, price, sizes } = props.data;

  return (
    <div className="product hover:shadow-2xl">
      <img src={productImage} />
      <div className="description">
        <b>{productName}</b>
        <p>${price}</p>
      </div>
      <Link
        to={`/product/${id}`}
        state={{ id, productName, productImage, price, sizes }}
      >
        <div className="addToCartBttn hover:scale-110 transition ease-out duration-300">
          Show more
        </div>
      </Link>
    </div>
  );
};

export default Product;
