import classes from './HamburgerMenu.module.css';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import AuthContext from '../../../context/auth-context';
import { GiHamburgerMenu } from 'react-icons/gi';
import { toggleMenu } from '../../../store/ui-slice';
import { FaListAlt } from 'react-icons/fa';
import { IoCreate } from 'react-icons/io5';
import { BiLogOut } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';

const HamburgerMenu = () => {
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const { menuOpen } = useSelector((state) => state.ui);

  const menuToggleHandler = () => {
    dispatch(toggleMenu());
  };

  const logoutHandler = () => {
    if (menuOpen) menuToggleHandler();
    authCtx.logout();
  };

  const sidebarClass = menuOpen ? classes.active : '';

  return (
    <React.Fragment>
      {!menuOpen && (
        <GiHamburgerMenu
          size='30px'
          className={classes.hamburgerOpen}
          onClick={menuToggleHandler}
        />
      )}
      {menuOpen && (
        <React.Fragment>
          <GrClose
            size='30px'
            className={classes.hamburgerClose}
            onClick={menuToggleHandler}
          />
          <nav className={`${classes.sidebar} ${sidebarClass}`}>
            <ul>
              <NavLink
                className={classes.navlink}
                to='/bugs-list'
                exact
                onClick={menuOpen && menuToggleHandler}
              >
                <li className={classes.navItem}>
                  <FaListAlt size='30px' color='white' />
                  <p>All Bugs</p>
                </li>
              </NavLink>

              <NavLink
                className={classes.navlink}
                to='/submit-bug'
                onClick={menuOpen && menuToggleHandler}
              >
                <li className={classes.navItem}>
                  <IoCreate size='30px' color='white' />
                  <p>Add New Bug</p>
                </li>
              </NavLink>

              <li className={classes.navItem} onClick={logoutHandler}>
                <BiLogOut size='30px' color='white' />
                <p>Logout</p>
              </li>
            </ul>
          </nav>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default HamburgerMenu;
