import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import Logo from './assets/Logo.svg'
import UserLogo from './assets/userlogo.svg';
import Language from './assets/language.svg';
const NavBarApp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <header >


            <Navbar light expand="md">

                <NavbarBrand href="/">
                    <img src={Logo} alt="logo" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Acerca de</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Instalaciones</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Contacto</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

                <Nav className="mx-auto" navbar>
                    <NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <NavbarBrand href="/">
                                    <img src={Language} alt="logo" />
                                </NavbarBrand>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Spanish
                                </DropdownItem>
                                <DropdownItem>
                                    English
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </NavItem>

                    <NavItem>
                        <NavbarBrand href="/">
                            <img src={UserLogo} alt="logo" />
                        </NavbarBrand>
                    </NavItem>
                </Nav>


            </Navbar>

        </header>
    );
}

export default NavBarApp;