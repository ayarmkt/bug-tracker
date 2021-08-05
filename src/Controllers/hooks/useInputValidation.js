import { useState } from 'react';

const useInputValidation = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valueIsTouched, setValueIsTouched] = useState(false);

  const enteredValueIsValid = validateValue(enteredValue);
  const hasError = !enteredValueIsValid && valueIsTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const valueTouchedHandler = () => {
    setValueIsTouched(true);
  };

  const resetValue = () => {
    setEnteredValue('');
    setValueIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasError,
    valueChangeHandler,
    valueTouchedHandler,
    resetValue,
  };
};

export default useInputValidation;
