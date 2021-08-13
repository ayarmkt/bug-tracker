import { useState } from 'react';

const useBugInput = (initValue) => {
  const [enteredValue, setEnteredValue] = useState(initValue);
  console.log(enteredValue);

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const resetValue = () => {
    setEnteredValue('');
  };

  return { enteredValue, valueChangeHandler, resetValue };
};

export default useBugInput;
