import classes from './Notification.module.css';
import { useSelector } from 'react-redux';

const Notification = (props) => {
  const { status } = useSelector((state) => state.ui.notification);

  let notificationStatus;
  switch (status) {
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
    <section className={`${classes.notification} ${notificationStatus} ${props.classname}`}>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
