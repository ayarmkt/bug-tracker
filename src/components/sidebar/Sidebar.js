import classes from './Sidebar.module.css';
import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';

import AuthContext from '../../store/auth-context';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { FaListAlt } from 'react-icons/fa';
import { IoCreate } from 'react-icons/io5';
import { BiLogOut } from 'react-icons/bi';



const Sidebar = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  //change false default later
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuToggleHandler = () => {
    setMenuCollapse((prevState) => !prevState);
  };

  const logoutHandler = () => {
    //logout
    authCtx.logout();
    history.replace('/login');
  };

  const sidebarClass = menuCollapse ? '' : classes.active;
  //className={classes.sidebar}

  return (
    <nav className={`${classes.sidebar} ${sidebarClass}`}>
      <div className={classes.closemenu} onClick={menuToggleHandler}>
        {menuCollapse ? (
          <FiArrowRightCircle size='30px' />
        ) : (
          <FiArrowLeftCircle size='30px' />
        )}
      </div>
      <ul>
        <NavLink className={classes.navlink} to='/bugs-list' exact>
          <li className={classes.navItem}>
            <FaListAlt size='30px' color='white' />
            {!menuCollapse && <p>All Bugs</p>}
          </li>
        </NavLink>

        <NavLink className={classes.navlink} to='/submit-bug'>
          <li className={classes.navItem}>
            <IoCreate size='30px' color='white' />
            {!menuCollapse && <p>Create New Bug</p>}
          </li>
        </NavLink>
        {/* <li className={`${classes.navItem} ${classes.logoutBtn}`}>Logout</li> */}

        <li className={classes.navItem} onClick={logoutHandler}>
          <BiLogOut size='30px' color='white' />
          {!menuCollapse && <p>Logout</p>}
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
