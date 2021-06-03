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
              <NavLink href="https://www.linkedin.com/in/jisu-yeo-aa8978160/">My Linkedin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/jyeo0125/portfolio"> My GitHub</NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
}

export default NavBar