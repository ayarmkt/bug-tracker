import classes from './ModalOverlay.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from '../store/ui-slice';
import { deleteBugs } from '../store/bug-slice';
import Button from './Button';
import { useHistory } from 'react-router-dom';

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const Modal = () => {
  const dispatch = useDispatch();
  const { bugs } = useSelector((state) => state.bugs);
  const { selectedBug } = useSelector((state) => state.bugs);
  const history = useHistory();
  console.log(bugs);
  console.log(selectedBug);

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const deleteBugHandler = () => {
    console.log(bugs);
    console.log(selectedBug);
    dispatch(deleteBugs(selectedBug));
    //want to identify which bug to delete from list
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

      {/* <button onClick={closeModalHandler}>Cancel</button>
      <button onClick={deleteBugHandler}>Confirm</button> */}
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
