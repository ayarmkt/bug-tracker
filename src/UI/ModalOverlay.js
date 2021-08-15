import classes from './ModalOverlay.module.css';
import ReactDOM from 'react-dom';
import React from 'react';
import { closeModal } from '../store/ui-slice';
//import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { deleteBugs } from '../store/bug-slice';
import { useSelector } from 'react-redux';

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const Modal = () => {
  const dispatch = useDispatch();
  const { bugs } = useSelector((state) => state.bugs);
  const { selectedBug } = useSelector((state) => state.bugs);
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
  };

  return (
    <section className={classes.modal}>
      <p className={classes['modal-msg']}>Are you sure you want to delete?</p>
      <p className={classes['modal-msg']}>`id: ${selectedBug.id}`</p>
      <button onClick={closeModalHandler}>Cancel</button>
      <button onClick={deleteBugHandler}>Confirm</button>
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