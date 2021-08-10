import { useState } from 'react';

const useAddNewBug = () => {
  const [enteredValue, setEnteredValue] = useState('');

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const resetValue = () => {
    setEnteredValue('');
  };

  return { enteredValue, valueChangeHandler, resetValue };
};

export default useAddNewBug;
