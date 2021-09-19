import classes from './H1.module.css';

const H1 = ({ title, classname }) => {
  // return <h1 className={classes.h1}>{title}</h1>;
  return <h1 className={`${classes.h1} ${classname}`}>{title}</h1>;
};

export default H1;
