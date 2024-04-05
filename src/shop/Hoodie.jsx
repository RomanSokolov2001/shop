import React from "react";
import Product from "./Product";
import { HOODIES } from "../products";
import Sidebar from "../components/sidebar/sidebar";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";


const Hoodie = () => {
  const {isBurgerClicked} = useContext(ShopContext);

  return (
    <div className="shop">
      <Sidebar />
      <div className="w-3/4" hidden={isBurgerClicked}>
        <div className="shopTitle">
          <h1>Hoodies</h1>
        </div>
        <div className="content">
          {HOODIES.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hoodie;
