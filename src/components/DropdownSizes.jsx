import React, { useEffect, useState } from "react";
import { ShopContext } from "../utils/shop-context";
import { useContext } from "react";

const DropdownSizes = (props) => {
  

  const sizes = props.data;
  const {size, setSize} = useContext(ShopContext);

  useEffect(() => {
    setSize(sizes[0])
  }, []);
 


  return (
    <div class="dropdown mb-4">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {size}
      </button>
      <div class="dropdown-menu font-black" aria-labelledby="dropdownMenuButton">
        {sizes.map((size) => (
          <a class="dropdown-item" onClick={()=>setSize(size)}>
            {size}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropdownSizes;
