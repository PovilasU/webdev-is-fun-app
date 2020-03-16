import React, { useState } from "react";
import { Button } from "reactstrap";
import { Alert } from "reactstrap";
import { Badge } from "reactstrap";
import { Container } from "reactstrap";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";

const Reactstrap = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <div>
      <h1>Reactstrap</h1>
      {/* <Button color="danger">Danger!</Button> */}

      <div>
        <h3>Alerts</h3>
        <Alert color="primary">This is a primary alert — check it out!</Alert>
        <Alert color="secondary">
          This is a secondary alert — check it out!
        </Alert>
        <Alert color="success">This is a success alert — check it out!</Alert>
        <Alert color="danger">This is a danger alert — check it out!</Alert>
        <Alert color="warning">This is a warning alert — check it out!</Alert>
        <Alert color="info">This is a info alert — check it out!</Alert>
        <Alert color="light">This is a light alert — check it out!</Alert>
        <Alert color="dark">This is a dark alert — check it out!</Alert>
      </div>
      <div>
        <h3>Badges</h3>
        <h1>
          Heading <Badge color="secondary">New</Badge>
        </h1>
        <h2>
          Heading <Badge color="secondary">New</Badge>
        </h2>
        <h3>
          Heading <Badge color="secondary">New</Badge>
        </h3>
        <h4>
          Heading <Badge color="secondary">New</Badge>
        </h4>
        <h5>
          Heading <Badge color="secondary">New</Badge>
        </h5>
        <h6>
          Heading <Badge color="secondary">New</Badge>
        </h6>
      </div>

      <div>
        <h3>Tabs</h3>
        <Nav tabs>
          <NavItem>
            <NavLink href="#" active>
              Link
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled Link
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};
export default Reactstrap;
