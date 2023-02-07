import React, { useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../UI/Input/Input";
const MealItemForm = (props) => {
  return (
    <form onSubmit={props.onSubmit} className={styles.form}>
      <Input
        id={props.id}
        onAmountChange={props.onAmountChange}
        amount={props.amount}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
