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
import Link from 'next/link';
import Logo from './assets/Logo.svg'
import UserLogo from './assets/userlogo.svg';
import Language from './assets/language.svg';
import styles from './styles.module.css';

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
                            <Link href="/"><a className={styles.navbarappLink} >Acerca de</a></Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/"><a className={styles.navbarappLink}>Instalaciones</a></Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/"><a className={styles.navbarappLink}>Contacto</a></Link>
                        </NavItem>
                    </Nav>
                </Collapse>

                <Nav className="mx-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <img src={Language} alt="logo" />
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