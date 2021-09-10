import React from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router';
//import { useContext } from 'react';

import classes from './BugItemDetail.module.css';
import Button from '../../../UI/Button/Button';
import { openModal } from '../../../store/ui-slice';
import ModalOverlay from '../../../UI/Modal/ModalOverlay';
import { storeSelectedBug } from '../../../store/bug-slice';
import H1 from '../../../UI/H1/H1';
import Card from '../../../UI/Card/Card';

const BugItemDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();

  //const history = useHistory();
  //const authCtx = useContext(AuthContext);

  //if (!authCtx.token) history.replace('/bug-tracker/login');

  const { modalOpen } = useSelector((state) => state.ui);
  const { bugs } = useSelector((state) => state.bugs);
  const selectedBug = bugs.find((bug) => bug.id === params.bugId);

  const openModalHandler = () => {
    dispatch(storeSelectedBug(selectedBug));
    dispatch(openModal());
  };

  let bugPriority;

  switch (selectedBug.priority) {
    case '1':
      bugPriority = 'High';
      break;
    case '2':
      bugPriority = 'Mid';
      break;
    case '3':
      bugPriority = 'Low';
      break;
    default:
      bugPriority = 'High';
  }

  return (
    <React.Fragment>
      {/* <div className={classes.container}> */}
      <Card>
        {/* <H1>Bug Detail</H1> */}
        <H1 title='Bug Detail' />

        <div className={classes['bug-detail']}>
          <div className={classes['detail-content']}>
            <p className={classes.label}>Title</p>
            <p className={classes.content}>{selectedBug.title}</p>
          </div>
          <div className={classes['detail-content-long-text']}>
            <p className={classes.label}>Details</p>
            <p className={classes.content}>{selectedBug.details}</p>
          </div>
          <div className={classes['detail-content-long-text']}>
            <p className={classes.label}>Steps</p>
            <p className={classes.content}>{selectedBug.steps}</p>
          </div>
          {/* <div className={classes['detail-content']}>
            <p className={classes.label}>Version</p>
            <p className={classes.content}>{selectedBug.version}</p>
          </div> */}

          <div className={classes['detail-content']}>
            <p className={classes.label}>Priority</p>
            <p className={classes.content}>{bugPriority}</p>
          </div>
          <div className={classes['detail-content']}>
            <p className={classes.label}>Status</p>
            <p className={classes.content}>{selectedBug.status}</p>
          </div>
          <div className={classes['detail-content']}>
            <p className={classes.label}>Assigned</p>
            <p className={classes.content}>{selectedBug.assigned}</p>
          </div>
          <div className={classes['detail-content']}>
            <p className={classes.label}>Creator</p>
            <p className={classes.content}>{selectedBug.creator}</p>
          </div>
          <div className={classes.actions}>
            <div className={classes.btns}>
              <Button
                type='button'
                disabled={false}
                className={classes['delete-btn']}
                onClick={openModalHandler}
                text='Delete bug'
              />
              <Link to={`/bug-tracker/update-bug/${selectedBug.id}`}>
                <Button
                  type='button'
                  disabled={false}
                  className={classes['update-btn']}
                  text='Update bug'
                />
              </Link>
            </div>

            <Link
              to='/bug-tracker/bugs-list'
              className={classes['back-to-list']}
            >
              <p>↶Back to List</p>
            </Link>
          </div>
        </div>
        {/* </div> */}
      </Card>
      {modalOpen && <ModalOverlay />}
    </React.Fragment>
  );
};

export default BugItemDetail;
