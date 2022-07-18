import { useState } from 'react';

const useInput = (validateFn) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateFn(enteredValue);
  const inputHasError = !valueIsValid && isTouched;

  //   console.log(inputHasError);

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };

  const inputResetHandler = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    valueIsValid,
    inputHasError,
    valueChangeHandler,
    inputBlurHandler,
    inputResetHandler,
  };
};

export default useInput;
