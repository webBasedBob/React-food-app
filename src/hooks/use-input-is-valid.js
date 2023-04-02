import { useImperativeHandle, useReducer } from "react";

const useInputIsValid = (inputValidateFn) => {
  const inputStateReducer = (prevState, action) => {
    if (action.type === "TOUCH") {
      return { ...prevState, isTouched: true };
    }
    if (action.type === "BLUR") {
      const inputIsValid = inputValidateFn(action.inputValue);
      return { ...prevState, isValid: inputIsValid, value: action.inputValue };
    }
    if (action.type === "CHANGE") {
      if (prevState.isValid !== undefined) {
        const inputIsValid = inputValidateFn(action.inputValue);
        return {
          ...prevState,
          isValid: inputIsValid,
          value: action.inputValue,
        };
      }
      return { ...prevState };
    }
    if (action.type === "EVALUATE") {
      const inputIsValid = inputValidateFn(prevState.value);
      return { ...prevState, isValid: inputIsValid, isTouched: true };
    }
  };
  const [inputState, dispatchInputState] = useReducer(inputStateReducer, {
    isTouched: false,
    isValid: undefined,
    value: "",
  });
  return {
    isValid: inputState.isValid,
    isTouched: inputState.isTouched,
    onTouch: (e) => {
      dispatchInputState({ type: "TOUCH" });
    },
    onBlur: (e) => {
      dispatchInputState({ type: "BLUR", inputValue: e.target.value });
    },
    onChange: (e) => {
      dispatchInputState({ type: "CHANGE", inputValue: e.target.value });
    },
    evaluate: () => {
      dispatchInputState({ type: "EVALUATE" });
    },
  };
};

export default useInputIsValid;
