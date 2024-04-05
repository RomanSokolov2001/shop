import React, { useContext } from "react";
import Product from "./Product";
import { PRODUCTS } from "../products";
import Sidebar from "../components/sidebar/sidebar";
import { ShopContext } from "../context/shop-context";

const Shop = () => {
  const {isBurgerClicked} = useContext(ShopContext);
  
  return (
    <div className="shop" >
      <Sidebar />
      <div className="w-3/4" hidden={isBurgerClicked}>
        <div className="shopTitle">
          <h1>My Shop</h1>
        </div>
        <div className="content">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
