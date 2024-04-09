import React, { useContext } from "react";
import Product from "./Product";
import { PRODUCTS } from "../products";
import { ShopContext } from "../utils/shop-context";

const Hoodie = () => {
  const { isBurgerClicked } = useContext(ShopContext);

  return (
    <div className="w-3/4" hidden={isBurgerClicked}>
      <div className="shopTitle">
        <h1>Hoodies</h1>
      </div>
      <div className="content">
        {PRODUCTS.map((product) =>
          "hoodie" == product.type ? <Product data={product} /> : <></>
        )}
      </div>
    </div>
  );
};

export default Hoodie;
