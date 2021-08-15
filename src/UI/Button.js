import classes from './Button.module.css';
import React from 'react';

const Button = (props) => {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={`${classes.btn} ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
