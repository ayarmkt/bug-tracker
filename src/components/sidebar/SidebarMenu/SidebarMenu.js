import classes from './SidebarMenu.module.css';
import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';

import AuthContext from '../../../context/auth-context';
import { toggleMenu } from '../../../store/ui-slice';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { FaListAlt } from 'react-icons/fa';
import { IoCreate } from 'react-icons/io5';
import { BiLogOut } from 'react-icons/bi';

const SideBarMenu = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const dispatch = useDispatch();
  const { menuOpen } = useSelector((state) => state.ui);

  const menuToggleHandler = () => {
    dispatch(toggleMenu());
  };

  const logoutHandler = () => {
    if (menuOpen) menuToggleHandler();
    authCtx.logout();
    history.replace('/login');
  };

  const sidebarClass = menuOpen ? classes.active : '';

  return (
    <nav className={`${classes.sidebar} ${sidebarClass}`}>
      <div className={classes.closemenu} onClick={menuToggleHandler}>
        {menuOpen ? (
          <FiArrowLeftCircle size='30px' />
        ) : (
          <FiArrowRightCircle size='30px' />
        )}
      </div>
      <ul>
        <NavLink
          className={classes.navlink}
          to='/bugs-list'
          exact
          onClick={menuOpen && menuToggleHandler}
        >
          <li className={classes.navItem}>
            <FaListAlt size='30px' color='white' />
            {menuOpen && <p>All Bugs</p>}
          </li>
        </NavLink>

        <NavLink
          className={classes.navlink}
          to='/submit-bug'
          onClick={menuOpen && menuToggleHandler}
        >
          <li className={classes.navItem}>
            <IoCreate size='30px' color='white' />
            {menuOpen && <p>Add New Bug</p>}
          </li>
        </NavLink>

        <li className={classes.navItem} onClick={logoutHandler}>
          <BiLogOut size='30px' color='white' />
          {menuOpen && <p>Logout</p>}
        </li>
      </ul>
    </nav>
  );
};

export default SideBarMenu;
