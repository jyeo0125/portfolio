import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return(
    <div className='navBar'>
        <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Jisu Yeo </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Top</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/jyeo0125/portfolio"> Jisu's GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
}

export default NavBar