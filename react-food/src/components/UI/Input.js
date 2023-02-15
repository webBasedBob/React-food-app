import React, { useCallback, useEffect } from "react";
import useInputIsValid from "../../hooks/use-input-is-valid";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={props.className || classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {props.children}
    </div>
  );
});

export default Input;
