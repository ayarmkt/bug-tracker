import { useState } from 'react';

const useAuthInputValidation = (validateValue) => {
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

  const guestLoginHandler = (guestValue) => {
    setEnteredValue(guestValue);
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
    guestLoginHandler,
    resetValue,
  };
};

export default useAuthInputValidation;
