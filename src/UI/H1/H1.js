import classes from './H1.module.css';

const H1 = ({ title}) => {
  return <h1 className={classes.h1}>{title}</h1>;
};

export default H1;
