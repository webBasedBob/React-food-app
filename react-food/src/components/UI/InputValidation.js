import React, { useEffect } from "react";
import useInputIsValid from "../../hooks/use-input-is-valid";
import Input from "./Input";
import classes from "./InputValidation.module.css";
const InputValidation = React.forwardRef((props, ref) => {
  const {
    isValid: inputIsValid,
    isTouched: inputIsTouched,
    onTouch: touchInputHandler,
    onBlur: blurInputHandler,
    onChange: changeInputHandler,
    evaluate: evaluateInput,
  } = useInputIsValid(props.validatingFn);

  const validityBasedClass = `${props.className} ${
    inputIsValid === false ? `${classes.invalid}` : ""
  }`;

  useEffect(() => {
    props.onValidityChange(props.input.id, inputIsValid);
  }, [inputIsValid]);

  useEffect(() => {
    if (props.evaluationNeeded) evaluateInput();
  }, [props.evaluationNeeded]);

  return (
    <Input
      ref={ref}
      className={validityBasedClass}
      label={props.label}
      inputIsValid={inputIsValid}
      input={{
        ...props.input,
        onFocus: touchInputHandler,
        onBlur: blurInputHandler,
        onChange: changeInputHandler,
      }}
    >
      {inputIsValid === false && (
        <p>Please enter a valid {props.label.toLowerCase()}</p>
      )}
    </Input>
  );
});

export default InputValidation;
