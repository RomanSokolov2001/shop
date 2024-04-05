import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import { ShopContext } from "../context/shop-context";
import { useAuth } from "../utils/AuthContext";

const Header = () => {
  const { userAuth, logoutUser } = useAuth();
  const { useScreenSize, isBurgerClicked, setIsBurgerClicked } =
    useContext(ShopContext);
  const screenSize = useScreenSize();

  return (
    <div className="header">
      <div className="banner"> FIRST SS24 DROP IS OUT </div>
      <div className="menu">
        <div className="container">
          <div className="container-item">
            <SearchIcon />
            <input className="pl-5 w-full" placeholder="Search"></input>
          </div>
          <div className="container-item">
            {userAuth ? (
              <button onClick={()=>logoutUser()}> Log out </button>
            ) : (
              <div className="container-item">
                <Link className="link" to="/login">
                  Log in
                </Link>
                <Link className="link" to="/signup">
                  Sign up
                </Link>
              </div>
            )}

            <Link className="link" to="/cart">
              Cart
            </Link>
            <button
              className="burger"
              hidden={screenSize.width > 500}
              onClick={() => setIsBurgerClicked((prev) => !prev)}
            >
              {isBurgerClicked ? <CloseIcon /> : <DehazeIcon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
