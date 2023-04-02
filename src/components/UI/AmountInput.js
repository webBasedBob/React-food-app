import React, { useRef } from "react";
import classes from "./AmountInput.module.scss";
import { Plus, Minus } from "../../assets/icons";
const AmountInput = (props) => {
  const inputRef = useRef();
  const decreaseHandler = () => {
    props.changeHandler(Number(inputRef.current.value) - 1);
  };
  const increaseHandler = () => {
    props.changeHandler(Number(inputRef.current.value) + 1);
  };
  return (
    <div style={{ ...props.style }} className={classes["amount"]}>
      <div onClick={decreaseHandler} className={classes["amount__icon"]}>
        {Minus}
      </div>
      <input
        ref={inputRef}
        onChange={(e) => {
          props.changeHandler(Number(e.target.value));
        }}
        {...props.config}
        type="number"
      ></input>
      <div onClick={increaseHandler} className={classes["amount__icon"]}>
        {Plus}
      </div>
    </div>
  );
};
export default AmountInput;
