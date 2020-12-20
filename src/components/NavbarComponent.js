import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container,
} from "reactstrap";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="navbar">
        <Container>
          <NavbarBrand className="navbar-brand" href="/">MovSite</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {/* <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem> */}
            </Nav>
            {/* <NavbarText>
              <NavLink href="#search">Search</NavLink>
            </NavbarText> */}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
