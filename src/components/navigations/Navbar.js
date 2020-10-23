import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to={routes.home}>Home</Link>
      </li>
      <li>
        <Link to={routes.about}>About</Link>
      </li>
      <li>
        <Link to={routes.contact}>Contact</Link>
      </li>
      <li>
        <Link to={routes.products}>Products</Link>
      </li>
    </ul>
  );
};

export default Navbar;
