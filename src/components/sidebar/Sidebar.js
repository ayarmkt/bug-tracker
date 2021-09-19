import React from 'react';

import SideBarMenu from './SidebarMenu/SidebarMenu';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Sidebar = () => {
  const { width: vw } = useWindowDimensions();

  return (
    <React.Fragment>
      {vw <= 767 && <HamburgerMenu />}
      {vw > 767 && <SideBarMenu />}
    </React.Fragment>
  );
};

export default Sidebar;
