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

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Hidden } from '@material-ui/core';


import MenuIcon from '@material-ui/icons/Menu';

const NavBarApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <Link href="/acercade"><a className={styles.navbarappLink} >Acerca de</a></Link>
        </ListItem>
        <ListItem button>
          <Link href="/instalaciones"><a className={styles.navbarappLink}>Instalaciones</a></Link>
        </ListItem>
        <ListItem button>
          <Link href="/reviews"><a className={styles.navbarappLink} >Reseñas</a></Link>
        </ListItem>
        <ListItem button>
          <Link href="/contacto"><a className={styles.navbarappLink}>Contacto</a></Link>
        </ListItem>
      </List>

    </div>
  );

  return (
    <div className={styles.containerNavApp}>

      <div className={`${styles.containerContent} row`}>

        <div className="col-2">
          <Link href="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="col-8" >
          <div className="d-flex justify-content-center">
            <Hidden only={['xs']}>
              <Link href="/acercade"><a className={styles.navbarappLink} >Acerca de</a></Link>
              <Link href="/instalaciones"><a className={styles.navbarappLink}>Instalaciones</a></Link>
              <Link href="/reviews"><a className={styles.navbarappLink} >Reseñas</a></Link>
              <Link href="/contacto"><a className={styles.navbarappLink}>Contacto</a></Link>
            </Hidden>
          </div>
        </div>

        <div className="col-2">
          <div className="d-flex justify-content-center">
            <Hidden only={['sm', 'md', 'lg', 'xl']}>

              <div className="m-0" onClick={toggleDrawer('right', true)}>
                <MenuIcon style={{fontSize:45}}/>
              </div>

              <Drawer anchor={`right`} open={state[`right`]} onClose={toggleDrawer('right', false)}>
                {list('right')}
              </Drawer>
            </Hidden>

          </div>
        </div>

      </div>
    </div>
  );
}

export default NavBarApp;




const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
