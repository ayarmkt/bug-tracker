import classes from './Sidebar.module.css';
import React, { useState } from 'react';

// //import icons from react icons
//  import { FaList, FaRegHeart } from 'react-icons/fa';
import {
  //  FiHome,
  //  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from 'react-icons/fi';
//  import { RiPencilLine } from 'react-icons/ri';
//  import { BiCog } from 'react-icons/bi';

import { FaListAlt } from 'react-icons/fa';
import { IoCreate } from 'react-icons/io5';

const Sidebar = () => {
  //change false default later
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuToggleHandler = () => {
    setMenuCollapse((prevState) => !prevState);
  };

  const sidebarClass = menuCollapse ? '' : classes.active;
  //className={classes.sidebar}

  return (
    <nav className={sidebarClass}>
      <div className='closemenu' onClick={menuToggleHandler}>
        {menuCollapse ? (
          <FiArrowRightCircle size='30px' />
        ) : (
          <FiArrowLeftCircle size='30px' />
        )}
      </div>
      <ul>
        <li className={classes['nav-item']}>
          <FaListAlt size='30px' color='white' />
          {!menuCollapse && <p>All Bugs</p>}
        </li>
        <li className={classes['nav-item']}>
          <IoCreate size='30px' color='white' />
          {!menuCollapse && <p>Create New Bug</p>}
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

// //import react pro sidebar components
// import {
//   ProSidebar,
//   Menu,
//   MenuItem,
//   SidebarHeader,
//   SidebarFooter,
//   SidebarContent,
// } from 'react-pro-sidebar';

// //import icons from react icons
// import { FaList, FaRegHeart } from 'react-icons/fa';
// import {
//   FiHome,
//   FiLogOut,
//   FiArrowLeftCircle,
//   FiArrowRightCircle,
// } from 'react-icons/fi';
// import { RiPencilLine } from 'react-icons/ri';
// import { BiCog } from 'react-icons/bi';

// //import sidebar css from react-pro-sidebar module and our custom css
// import 'react-pro-sidebar/dist/css/styles.css';

// const Sidebar = () => {
//   //create initial menuCollapse state using useState hook
//   const [menuCollapse, setMenuCollapse] = useState(false);

//   //create a custom function that will change menucollapse state from false to true and true to false
//   const menuIconClick = () => {
//     //condition checking to change state from true to false and vice versa
//     menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
//   };

//   return (
//     <>
//       <div id='header'>
//         {/* collapsed props to change menu size using menucollapse state */}
//         <ProSidebar collapsed={menuCollapse}>
//           <SidebarHeader>
//             <div className={classes.logotext}>
//               {/* small and big change using menucollapse state */}
//               <p>{menuCollapse ? 'Logo' : 'Big Logo'}</p>
//             </div>
//             <div className='closemenu' onClick={menuIconClick}>
//               {/* changing menu collapse icon on click */}
//               {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
//             </div>
//           </SidebarHeader>
//           <SidebarContent>
//             <Menu iconShape='square'>
//               <MenuItem active={true} icon={<FiHome />}>
//                 Home
//               </MenuItem>
//               <MenuItem icon={<FaList />}>Category</MenuItem>
//               <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
//               <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
//               <MenuItem icon={<BiCog />}>Settings</MenuItem>
//             </Menu>
//           </SidebarContent>
//           <SidebarFooter>
//             <Menu iconShape='square'>
//               <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
//             </Menu>
//           </SidebarFooter>
//         </ProSidebar>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
