import styles from "./MealItem.module.css";
import React, { useState, useContext } from "react";
import MealItemForm from "../MealItemForm/MealItemForm";
import CartContext from "../../context//OrderContext/order-context";
const MealItem = (props) => {
  const [amount, setAmount] = useState(1);
  const amountChangeHandler = (e) => {
    const userAmount = e.target.value > 0 ? e.target.value : 1;
    setAmount(userAmount);
  };
  const context = useContext(CartContext);
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(context);
    context.addMeal({ ...meal, amount: +amount });
  };
  const meal = props.meal;
  const formattedPrice = `${meal.price.toFixed(2)} $`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <p className={styles.description}>{meal.description}</p>
        <p className={styles.price}>{formattedPrice}</p>
      </div>
      <MealItemForm
        onSubmit={submitHandler}
        onAmountChange={amountChangeHandler}
        amount={amount}
      />
    </li>
  );
};

export default MealItem;
