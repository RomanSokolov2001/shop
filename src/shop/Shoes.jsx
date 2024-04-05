import React from "react";
import Product from "./Product";
import { SHOES } from "../products";
import Sidebar from "../components/sidebar/sidebar";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";



const Shoes = () => {
  const {isBurgerClicked} = useContext(ShopContext);

  return (
    <div className="shop">
      <Sidebar />
      <div className="w-3/4" hidden={isBurgerClicked}>
        <div className="shopTitle">
          <h1>Shoes</h1>
        </div>
        <div className="content">
          {SHOES.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shoes;
