import classes from './Notification.module.css';
import { useSelector } from 'react-redux';

const Notification = (props) => {
  const { notification } = useSelector((state) => state.ui);

  let notificationStatus;
  switch (notification.status) {
    case 'pending':
      notificationStatus = classes.pending;
      break;
    case 'success':
      notificationStatus = classes.success;
      break;
    case 'error':
      notificationStatus = classes.error;
      break;
    default:
      notificationStatus = null;
      break;
  }

  return (
    <section className={`${classes.notification} ${notificationStatus}`}>
      {/* <h2>{props.title}</h2> */}
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
