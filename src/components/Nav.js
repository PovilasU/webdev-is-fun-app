import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white"
  };
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/home">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <li>
          <a href="https://webdev-is-fun.blogspot.com/" target="_balnk">
            Blog
          </a>
        </li>
        <Link style={navStyle} to="/gallery">
          <li>Gallery</li>
        </Link>
        <Link style={navStyle} to="/projects">
          <li>Projects</li>
        </Link>
        <Link style={navStyle} to="/reactstrap">
          <li>Reactstrap</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
