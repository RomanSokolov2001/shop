import React from "react";
import { Link } from "react-router-dom";
import { myContacts, links } from "./footerData";


const Footer = () => {
  
  return (
    <div className="footer">
      <div className="footer-box">
        <ul>
          <b> Frontend Work </b>
          <Link to="/about">
            {" "}
            <p>About</p>{" "}
          </Link>
        </ul>
        <ul>
          <b>My Contacts</b>
          {myContacts.map((val) => {
            return (
              <li>
                {val.name}: {val.value}{" "}
              </li>
            );
          })}
        </ul>
        <ul>
          <b>Links</b>
          {links.map((val) => {
            return (
              <li>
                <a href={val.value}>{val.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
