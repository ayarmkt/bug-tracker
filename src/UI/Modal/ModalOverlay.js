import classes from './ModalOverlay.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//import { useCallback } from 'react';
import { useEffect } from 'react';

import { closeModal } from '../../store/ui-slice';
//import { deleteBugs } from '../store/bug-slice';
import Button from '../Button/Button';
import { sendDeletedBugInfoToServer } from '../../store/bug-actions';
import { getBugsFromServer } from '../../store/bug-actions';
//import { getBugs } from '../store/bug-slice';
//import { deleteBugs } from '../../store/bug-slice';

const Backdrop = () => {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return <div className={classes.backdrop} onClick={closeModalHandler}></div>;
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
  const history = useHistory();

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const deleteBugHandler = () => {
    dispatch(sendDeletedBugInfoToServer(selectedBug, selectedBugKey));
    //dispatch(getBugsFromServer());
    dispatch(closeModal());
    history.push('/bugs-list');
  };

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
