import React from "react";
import { sidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

function Sidebar() {
  const {useScreenSize, isBurgerClicked, setIsBurgerClicked} = useContext(ShopContext);
  const screenSize = useScreenSize();
  return (
    <div className="sidebar" hidden={screenSize.width<500 && !isBurgerClicked}>
      <div className="shopname">
        <h1 className="font-bold m-5"> MY SHOP NAME </h1>
        <h1 className="logo">®</h1>
      </div>

      <ul className="sidebar-list">
        {sidebarData.map((val, key) => {
          return (
            <Link to={val.link}>
              <li onClick={()=>setIsBurgerClicked(false)}
                
                className={"Else" === val.title ? "row-last" : "row"}
                key={key}
              >
                <div id="icon" className="icon">
                  {val.icon}
                </div>
                <div id="title">{val.title}</div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
