import classes from './Button.module.css';
import React from 'react';

const Button = ({ type, disabled, className, onClick, text }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${classes.btn} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
