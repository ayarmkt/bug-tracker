import classes from './ModalOverlay.module.css';
import ReactDOM from 'react-dom';
import React from 'react';
import { closeModal } from '../store/ui-slice';
//import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const Modal = () => {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return (
    <section className={classes.modal}>
      <p className={classes['modal-msg']}>Are you sure you want to delete?</p>
      <button onClick={closeModalHandler}>Cancel</button>
      <button>Confirm</button>
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
