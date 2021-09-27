import classes from './Title.module.css';

const Title = ({ title }) => {
  return <h1 className={classes.h1}>{title}</h1>;
};

export default Title;
