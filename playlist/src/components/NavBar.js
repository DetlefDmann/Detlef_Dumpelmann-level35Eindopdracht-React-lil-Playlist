import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav__bar">
      <ul className="nav__link">
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="about" id="about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
