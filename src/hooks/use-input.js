import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  } else if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  } else if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }
  return state;
};
const useInput = (validateFn) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateFn(inputState.value);
  const inputHasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({ type: 'INPUT', value: e.target.value });
  };

  const inputBlurHandler = (e) => {
    dispatch({ type: 'BLUR' });
  };

  const inputResetHandler = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    valueIsValid,
    inputHasError,
    valueChangeHandler,
    inputBlurHandler,
    inputResetHandler,
  };
};

export default useInput;
