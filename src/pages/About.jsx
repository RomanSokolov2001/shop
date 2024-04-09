import React, { useContext } from "react";
import { ShopContext } from "../utils/shop-context";

const About = () => {
  const { isBurgerClicked } = useContext(ShopContext);

  return (
    <div className="w-3/4" hidden={isBurgerClicked}>
      <div className="shopTitle">
        <h1>About website</h1>
      </div>
      <div className="content">
        <div>
          <h1>
            <b>Router</b>
          </h1>
          <p>
            React Router is used for smooth page navigation without reloading.
          </p>
          <h1>
            <b>Components Listing</b>
          </h1>
          <p>
            This website is built with reusable React components for easier
            development and maintenance, such as carts listed in the shop.
          </p>
          <h1>
            <b>Pages</b>
          </h1>
          <p>
            The website has some sections and routes. Also here is implemented a private page feature, however it is not used.
          </p>
          <h1>
            <b>Authorization with Appwrite</b>
          </h1>
          <p>
            Here authentication is implemented with Appwrite. However, this
            function is not using email verification.
          </p>
          <h1>
            <b>Login/Register</b>
          </h1>
          <p>There are Log in and Sing up pages with user regex.</p>
          <h1>
            <b>Construction of Website Components</b>
          </h1>
          <p>
            React components are clearly connected with each other by CSS
            styling.
          </p>
          <h1>
            <b>Basic UI for Showcase</b>
          </h1>
          <p>UI is inspired by another web shop www.racerworldwide.net</p>
          <h1>
            <b>Reacting</b>
          </h1>
          <p>
            Overall, components and buttons have a reaction to user clicks and
            focus like smoothly changing color or size. 
          </p>
          <h1>
            <b>Mobile responsive</b>
          </h1>
          <p>
            Depending on screen width the user will view different web structure.
            Particular for mobiles there is added burger icon in a navbar,
            which opens/closes the sidebar.
          </p>
          <h1>
            <b>Author words</b>
          </h1>
          <p>
            This is my first personal react project, just created for practice.
            May be it looks simple and poor, although the development experience
            is more valuable than a bunch of web tutorials and guides.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
