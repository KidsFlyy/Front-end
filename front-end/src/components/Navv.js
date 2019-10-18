import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const Navv = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav pills>
        <NavItem>
          <NavLink href="#" active>Link</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Admin</DropdownItem>
            <DropdownItem>Login</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Register New Admin</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
      
      </Nav>
    </div>
  );
}

export default Navv;