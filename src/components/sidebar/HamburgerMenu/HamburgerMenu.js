import classes from './HamburgerMenu.module.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import AuthContext from '../../../store/auth-context';
import { GiHamburgerMenu } from 'react-icons/gi';
import { toggleMenu } from '../../../store/ui-slice';
//import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { FaListAlt } from 'react-icons/fa';
import { IoCreate } from 'react-icons/io5';
import { BiLogOut } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';

const HamburgerMenu = ({ onClick }) => {
  const { menuOpen } = useSelector((state) => state.ui);
  const { mobileMenu } = useSelector((state) => state.ui);
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authCtx.logout();
    history.replace('/bug-tracker/login');
  };

  const menuToggleHandler = () => {
    //setMenuCollapse((prevState) => !prevState);
    dispatch(toggleMenu());
  };

  const sidebarClass = menuOpen ? classes.active : '';

  return (
    <React.Fragment>
      {mobileMenu && !menuOpen && (
        <GiHamburgerMenu
          size='30px'
          className={classes.hamburgerOpen}
          onClick={menuToggleHandler}
        />
      )}
      {mobileMenu && menuOpen && (
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
                to='/bug-tracker/bugs-list'
                exact
                onClick={menuToggleHandler}
              >
                <li className={classes.navItem}>
                  <FaListAlt size='30px' color='white' />
                  <p>All Bugs</p>
                </li>
              </NavLink>

              <NavLink
                className={classes.navlink}
                to='/bug-tracker/submit-bug'
                onClick={menuToggleHandler}
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
