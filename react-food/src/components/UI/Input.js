import React, { useCallback, useEffect } from "react";
import useInputIsValid from "../../hooks/use-input-is-valid";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const resolvedClass = `${props.className || classes.input} ${
    props.flexColumn ? classes.column : classes.row
  }`;
  return (
    <div className={resolvedClass}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {props.children}
    </div>
  );
});

export default Input;
