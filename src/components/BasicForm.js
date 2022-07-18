import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    value: fNameValue,
    valueIsValid: fNameValueIsValid,
    inputHasError: fNameHasError,
    inputResetHandler: fNameResetInput,
    valueChangeHandler: fNameValueChangeHandler,
    inputBlurHandler: fNameInputBlurHandler,
  } = useInput((val) => val.trim() !== '');

  const {
    value: lNameValue,
    valueIsValid: lNameValueIsValid,
    inputHasError: lNameHasError,
    inputResetHandler: lNameResetInput,
    valueChangeHandler: lNameValueChangeHandler,
    inputBlurHandler: lNameInputBlurHandler,
  } = useInput((val) => val.trim() !== '');

  const {
    value: emailValue,
    valueIsValid: emailIsValid,
    inputHasError: emailHasError,
    inputResetHandler: emailResetInput,
    valueChangeHandler: emailValueChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput((val) => val.trim() !== '' && val.includes('@'));

  let isFormValid = false;
  console.log(fNameValueIsValid && lNameValueIsValid && emailIsValid);

  if (fNameValueIsValid && lNameValueIsValid && emailIsValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    fNameResetInput();
    lNameResetInput();
    emailResetInput();
  };

  const fNameInputClasses = fNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const lNameInputClasses = lNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={fNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={fNameValueChangeHandler}
            onBlur={fNameInputBlurHandler}
            value={fNameValue}
          />
          {fNameHasError && <p className="error-text">First name is empty!</p>}
        </div>
        <div className={lNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lNameValueChangeHandler}
            onBlur={lNameInputBlurHandler}
            value={lNameValue}
          />
          {lNameHasError && <p className="error-text">Last name is empty!</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailValueChangeHandler}
          onBlur={emailInputBlurHandler}
          value={emailValue}
        />
        {emailHasError && (
          <p className="error-text">Please enter valid email !</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
