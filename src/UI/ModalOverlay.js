import classes from './ModalOverlay.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
//import { useHistory } from 'react-router-dom';
//import { useCallback } from 'react';
//import { useEffect } from 'react';

import { closeModal } from '../store/ui-slice';
//import { deleteBugs } from '../store/bug-slice';
import Button from './Button';
import { sendDeletedBugInfoToServer } from '../store/bug-actions';
import { getBugsFromServer } from '../store/bug-actions';
//import { getBugs } from '../store/bug-slice';
import { deleteBugs } from '../store/bug-slice';

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const Modal = () => {
  const dispatch = useDispatch();
  const { bugs } = useSelector((state) => state.bugs);
  console.log(bugs);
  //const { modalOpen } = useSelector((state) => state.ui);
  const { selectedBug } = useSelector((state) => state.bugs);
  //console.log(selectedBug);
  const selectedBugKey = selectedBug.key;
  //console.log(selectedBugKey);
  //const history = useHistory();

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const sendBugDelete = async () => {
    dispatch(deleteBugs(selectedBug));
    await sendDeletedBugInfoToServer(selectedBug, selectedBugKey);
    //const storedBugs = await getBugsFromServer();
    await getBugsFromServer();
    //await dispatch(getBugs(storedBugs));
    //await history.push('/bug-tracker/bugs-list');
    // if (!modalOpen) {
    //   await getBugsFromServer();
    //   await history.push('/bug-tracker/bugs-list');
    // }
  };

  const deleteBugHandler = () => {
    sendBugDelete();
    //dispatch(deleteBugs(selectedBug));
    dispatch(closeModal());
  };

  //////////PASTE/////////////
  // //eventually move to bug-slice
  // let sortedArray = [...bugs];
  // if (sortedArray.length > 1) {
  //   sortedArray.sort((a, b) => Number(a.priority) - Number(b.priority));
  // }

  // const getData = useCallback(async () => {
  //   //await console.log('getData running');
  //   const storedBugs = await getBugsFromServer();
  //   await dispatch(getBugs(storedBugs));
  //   //await sortArray(bugs);
  //   //await console.log(sortedArray);
  //   //await console.log(bugs);
  // }, []);

  // //added bugs
  // useEffect(() => {
  //   getData();
  // }, [getData, bugs]);
  //////////PASTE/////////////

  return (
    <section className={classes.modal}>
      <p className={classes['modal-msg']}>Are you sure you want to delete?</p>
      <div className={classes.btns}>
        <Button
          type='button'
          disabled={false}
          className={classes['cancel-btn']}
          onClick={closeModalHandler}
          text={'Cancel'}
        />
        <Button
          type='button'
          disabled={false}
          className={classes['confirm-btn']}
          onClick={deleteBugHandler}
          text={'Confirm'}
        />
      </div>
    </section>
  );
};

const ModalOverlay = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Modal />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ModalOverlay;
