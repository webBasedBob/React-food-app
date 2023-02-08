import React, { useState, useContext } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../UI/Input/Input";
import CartContext from "../../context//OrderContext/order-context";
import MealsContext from "../../context/MealsContext/MealsContext";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);
  const amountChangeHandler = (e) => {
    const userAmount = e.target.value > 0 ? e.target.value : 1;
    setAmount(userAmount);
  };

  const localCartContext = useContext(CartContext);
  const localMealsContext = useContext(MealsContext);
  const submitHandler = (e) => {
    e.preventDefault();
    localCartContext.addMeal({
      ...localMealsContext.find((meal) => {
        return meal.id === props.id;
      }),
      amount: +amount,
    });
    setAmount(1);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        id={props.id}
        onAmountChange={amountChangeHandler}
        amount={amount}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
