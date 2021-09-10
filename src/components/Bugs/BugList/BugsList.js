import classes from './BugsList.module.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useContext } from 'react';

import BugItem from '../BugItem/BugItem';
import ModalOverlay from '../../../UI/Modal/ModalOverlay';
import { getBugsFromServer } from '../../../store/bug-actions';
import { getBugs } from '../../../store/bug-slice';
import H1 from '../../../UI/H1/H1';
import Card from '../../../UI/Card/Card';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Notification from '../../../UI/Notification/Notification';
import AuthContext from '../../../store/auth-context';

const BugsList = () => {
  //const history = useHistory();
  //const authCtx = useContext(AuthContext);

  // if (!authCtx.token) history.replace('/bug-tracker/login');

  const { bugs } = useSelector((state) => state.bugs);
  //console.log('bugs');
  //console.log(bugs);
  const { menuOpen } = useSelector((state) => state.ui);
  //const { mobileMenu } = useSelector((state) => state.ui);
  const { modalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const { status, message } = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(getBugsFromServer());
    //dispatch(getBugs(bugsList));
  }, []);

  // //eventually move to bug-slice
  let sortedArray;
  if (bugs) {
    sortedArray = [...bugs];
    if (sortedArray.length > 1) {
      sortedArray.sort((a, b) => Number(a.priority) - Number(b.priority));
    }
  }

  // useEffect(() => {
  //   dispatch(getBugs(bugsList));
  // }, [dispatch, bugsList]);

  // let sortedArray = [...bugs];
  // if (sortedArray.length > 1) {
  //   sortedArray.sort((a, b) => Number(a.priority) - Number(b.priority));
  // }

  //dispatch(getBugs(bugs));

  //   //in px
  //   const vw = Math.max(
  //     document.documentElement.clientWidth || 0,
  //     window.innerWidth || 0
  //   );

  //   const vh = Math.max(
  //     document.documentElement.clientHeight || 0,
  //     window.innerHeight || 0
  //   );

  const { width: vw } = useWindowDimensions();
  //console.log(vw);

  let mobileMenu = vw <= 767 ? true : false;

  const containerMenu = mobileMenu && menuOpen ? classes.mobileMenuOpen : '';

  return (
    <React.Fragment>
      <Card className={classes.containerMenu}>
        {/* <div className={`${classes.container} ${containerMenu}`}> */}
        <H1 title='All Bugs' />
        <Notification
          className={classes.notification}
          //title={notification.title}
          message={message}
        />
        <ul className={classes['list-container']}>
          <li className={classes.labels}>
            <p key='title'>Title</p>
            {/* <p key='version'>Version</p> */}
            <p key='priority'>Priority</p>
            <p key='status'>Status</p>
            {!mobileMenu && <p key='assigned'>Assigned</p>}
            {!mobileMenu && <p key='creator'>Creator</p>}
            <div className={classes.actions}>
              <p>{mobileMenu ? '' : 'Edit'}</p>
              <p>{mobileMenu ? '' : 'Delete'}</p>
            </div>
          </li>
          {sortedArray &&
            sortedArray.length >= 1 &&
            sortedArray.map((bug) => (
              <BugItem
                className={classes.items}
                key={bug.id}
                id={bug.id}
                bug={bug}
              />
            ))}
          {status === 'success' &&
            (!sortedArray || sortedArray.length === 0) && (
              <p className={classes.empty}>No bugs found.</p>
            )}
        </ul>
        {/* </div> */}
      </Card>
      {modalOpen && <ModalOverlay />}
    </React.Fragment>
  );
};

export default BugsList;
