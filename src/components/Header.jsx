import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../utils/shop-context";
import { useAuth } from "../utils/AuthContext";

import SearchIcon from "@mui/icons-material/Search";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";



const Header = () => {
  const { userAuth, logoutUser } = useAuth();
  const { useScreenSize, isBurgerClicked, setIsBurgerClicked } =
    useContext(ShopContext);
  const screenSize = useScreenSize();

  return (
    <div className="header">
      <div className="header-banner"> FIRST SS24 DROP IS OUT </div>
      <div className="header-menu">
        <div className="header-container">
          <div className="header-container-item">
            <SearchIcon />
            <input className="pl-5 w-full" placeholder="Search"></input>
          </div>
          <div className="header-container-item">
            {userAuth ? (
              <button onClick={() => logoutUser()}>
                {screenSize.width > 500 ? <p>Log out </p> : <LogoutIcon />}{" "}
              </button>
            ) : (
              <div className="header-container-item">
                <Link className="header-link" to="/login">
                  {screenSize.width > 500 ? <p>Log in </p> : <LoginIcon />}
                </Link>
                <Link className="header-link" to="/signup">
                  {screenSize.width > 500 ? <p>Sign up </p> : ""}
                </Link>
              </div>
            )}
            <Link className="header-link" to="/cart">
              {screenSize.width > 500 ? (
                <p>Cart </p>
              ) : (
                <ShoppingCartIcon className="mr-4" />
              )}
            </Link>
            <button
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
