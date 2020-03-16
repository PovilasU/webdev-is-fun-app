import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";

// function NavigatioBar() {

const NavigationBar = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  // const navStyle = {
  //   color: "white"
  // };
  return (
    <div>
      <Nav tabs>
        {/* <NavItem>
          <NavLink href="#" active>
            About
          </NavLink>
        </NavItem> */}
        <NavItem>
          <NavLink>
            <Link to="/home">Home</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active>
            <Link to="/about">About</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://webdev-is-fun.blogspot.com/" target="_balnk">
            Blog
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/projects">Projects</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/gallery">Gallery</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/reactstrap">Reactstrap</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/material">MaterialUI</Link>
          </NavLink>
        </NavItem>

        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Projects
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </div>

    // <nav>

    //   <h3>Logo</h3>
    //   <ul className="nav-links">
    //     <Link style={navStyle} to="/home">
    //       <li>Home</li>
    //     </Link>
    //     <Link style={navStyle} to="/about">
    //       <li>About</li>
    //     </Link>
    //     <li>
    //       <a href="https://webdev-is-fun.blogspot.com/" target="_balnk">
    //         Blog
    //       </a>
    //     </li>
    //     <Link style={navStyle} to="/gallery">
    //       <li>Gallery</li>
    //     </Link>
    //     <Link style={navStyle} to="/projects">
    //       <li>Projects</li>
    //     </Link>
    //     <Link style={navStyle} to="/reactstrap">
    //       <li>Reactstrap</li>
    //     </Link>
    //   </ul>

    // </nav>
  );
};
export default NavigationBar;
