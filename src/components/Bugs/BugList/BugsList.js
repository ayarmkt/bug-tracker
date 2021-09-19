import classes from './BugsList.module.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BugItem from '../BugItem/BugItem';
import ModalOverlay from '../../../UI/Modal/ModalOverlay';
import { getBugsFromServer } from '../../../store/bug-actions';
import H1 from '../../../UI/H1/H1';
import Card from '../../../UI/Card/Card';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Notification from '../../../UI/Notification/Notification';

const BugsList = () => {
  const dispatch = useDispatch();
  const { bugs } = useSelector((state) => state.bugs);
  const { modalOpen } = useSelector((state) => state.ui);
  const { status, message } = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(getBugsFromServer());
  }, []);

  let sortedArray;
  if (bugs) {
    sortedArray = [...bugs];
    if (sortedArray.length > 1) {
      sortedArray.sort((a, b) => Number(a.priority) - Number(b.priority));
    }
  }

  const { width: vw } = useWindowDimensions();

  let mobileMenu = vw <= 767 ? true : false;

  return (
    <React.Fragment>
      <Card className={classes.containerMenu}>
        <H1 title='All Bugs'  />
        <Notification
          classname={classes.notification}
          message={message}
        />
        <ul className={classes['list-container']}>
          <li className={classes.labels}>
            <p key='title'>Title</p>
            <p key='priority'>Priority</p>
            {!mobileMenu && <p key='status'>Status</p>}
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
      </Card>
      {modalOpen && <ModalOverlay />}
    </React.Fragment>
  );
};

export default BugsList;
