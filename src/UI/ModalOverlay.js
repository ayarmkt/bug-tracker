import classes from './ModalOverlay.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { closeModal } from '../store/ui-slice';
import { deleteBugs } from '../store/bug-slice';
import Button from './Button';

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const Modal = () => {
  const dispatch = useDispatch();
  const { selectedBug } = useSelector((state) => state.bugs);
  const history = useHistory();

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const deleteBugHandler = () => {
    dispatch(deleteBugs(selectedBug));
    dispatch(closeModal());
    history.push('/bug-tracker/bugs-list');
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
