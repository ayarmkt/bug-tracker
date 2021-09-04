import React from 'react';

//import { useEffect } from 'react';
//import { useDispatch } from 'react-redux';
//import { useSelector } from 'react-redux';
//import { useState } from 'react';

//import { toggleMenu } from '../../store/ui-slice';

import SideBarMenu from './SidebarMenu/SidebarMenu';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import useWindowDimensions from '../../hooks/useWindowDimensions';
//import { setMenuType } from '../../store/ui-slice';

const Sidebar = () => {
  // const vw = Math.max(
  //   document.documentElement.clientWidth || 0,
  //   window.innerWidth || 0
  // );
  // console.log(vw);

  const { width: vw } = useWindowDimensions();
  //console.log(vw);

  //state.mobileMenu = vw <= 767 ? true : false;

  // const vw = Math.max(
  //   document.documentElement.clientWidth || 0,
  //   window.innerWidth || 0
  // );
  // const vh = Math.max(
  //   document.documentElement.clientHeight || 0,
  //   window.innerHeight || 0
  // );

  // useEffect(() => {
  //   dispatch(setMenuType());
  // }, [document.documentElement.clientWidth, window.innerWidth]);

  //const dispatch = useDispatch();
  //const { mobileMenu } = useSelector((state) => state.ui);
  //const [menuCollapse, setMenuCollapse] = useState(vw > 1365 ? false : true);
  //const [mobileMenu, setMobileMenu] = useState(vw > 767 ? false : true);

  // const menuToggleHandler = () => {
  //   //setMenuCollapse((prevState) => !prevState);
  //   dispatch(toggleMenu());
  // };

  return (
    <React.Fragment>
      {vw <= 767 && <HamburgerMenu />}
      {vw > 767 && <SideBarMenu />}
    </React.Fragment>
  );
};

export default Sidebar;
