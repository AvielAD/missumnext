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
        <Navbar light expand="md" >

            <NavbarBrand href="/">
                <img src={Logo} alt="logo" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>



                <Nav className="mx-auto order-1 order-xs-2" navbar>
                    <NavItem>
                        <Link href="/acercade"><a className={styles.navbarappLink} >Acerca de</a></Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/instalaciones"><a className={styles.navbarappLink}>Instalaciones</a></Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/contacto"><a className={styles.navbarappLink}>Contacto</a></Link>
                    </NavItem>
                </Nav>
            </Collapse>

            <Nav className="ml-auto order-2 order-xs-1" navbar>

                <NavItem>
                    <NavbarBrand href="/">
                        <img src={UserLogo} alt="logo" />
                    </NavbarBrand>
                </NavItem>
            </Nav>


        </Navbar>
    );
}

export default NavBarApp;