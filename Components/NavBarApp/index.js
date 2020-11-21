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
import Logo from './assets/logo.svg'
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

                <Nav className="mx-auto" navbar>
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

            

        </Navbar>
    );
}

export default NavBarApp;