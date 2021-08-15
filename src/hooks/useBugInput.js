import { useState } from 'react';

const useBugInput = (initValue) => {
  const [enteredValue, setEnteredValue] = useState(initValue);
  console.log(enteredValue);

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const resetValueHandler = () => {
    setEnteredValue('');
  };

  return { enteredValue, valueChangeHandler, resetValueHandler };
};

export default useBugInput;
