import classes from './BugsList.module.css';
import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BugItem from '../BugItem/BugItem';
import ModalOverlay from '../../../UI/Modal/ModalOverlay';
import { getBugsFromServer } from '../../../store/bug-actions';
import { getBugs } from '../../../store/bug-slice';
import H1 from '../../../UI/H1/H1';
import Card from '../../../UI/Card/Card';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Notification from '../../../UI/Notification/Notification';

const BugsList = () => {
  const { bugs } = useSelector((state) => state.bugs);
  console.log(bugs);
  const { menuOpen } = useSelector((state) => state.ui);
  //const { mobileMenu } = useSelector((state) => state.ui);
  const { modalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const { notification } = useSelector((state) => state.ui);
  console.log(notification);

  // //eventually move to bug-slice
  let sortedArray = [...bugs];
  if (sortedArray.length > 1) {
    sortedArray.sort((a, b) => Number(a.priority) - Number(b.priority));
  }

  dispatch(getBugs(bugs));

  const getData = useCallback(async () => {
    const storedBugs = await getBugsFromServer();
    await dispatch(getBugs(storedBugs));
  }, []);

  //added bugs
  useEffect(() => {
    getData();
  }, [getData]);

  // const getPosition = (el) => {
  //   if (!el) return;

  //   //in px
  //   const vw = Math.max(
  //     document.documentElement.clientWidth || 0,
  //     window.innerWidth || 0
  //   );

  //   const vh = Math.max(
  //     document.documentElement.clientHeight || 0,
  //     window.innerHeight || 0
  //   );

  //   console.log(vh, vw);
  //   console.log(el.getBoundingClientRect());
  //   let position = el.getBoundingClientRect();

  //   let topPercentage = (position.top / vh) * 100;
  //   let leftPercentage = (position.left / vw) * 100;

  //   let topPx = vh * console.log(topPercentage, leftPercentage);
  // };
  const { width: vw } = useWindowDimensions();
  console.log(vw);

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
          message={notification.message}
        />
        <ul className={classes['list-container']}>
          <li className={classes.labels}>
            <p key='title'>Title</p>
            <p key='version'>Version</p>
            <p key='priority'>Priority</p>
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
          {(!sortedArray || sortedArray.length === 0) && (
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
