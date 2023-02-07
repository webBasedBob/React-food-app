import React, { useState } from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>Ammount</label>
      <input
        id={props.id}
        type="number"
        value={props.amount}
        onChange={props.onAmountChange}
      />
    </div>
  );
};

export default Input;
