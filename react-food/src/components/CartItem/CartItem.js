import classes from "./CartItem.module.css";
import OrderContext from "../../context/OrderContext/order-context";
import React, { useContext } from "react";
import MealsContext from "../../context/MealsContext/MealsContext";
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const orderContext = useContext(OrderContext);
  const mealsContext = useContext(MealsContext);
  const removeHandler = () => {
    const mealObj = {
      ...mealsContext.find((meal) => {
        return meal.id == props.id;
      }),
      amount: 1,
    };
    orderContext.removeMeal(mealObj);
  };
  const addHandler = () => {
    const mealObj = {
      ...mealsContext.find((meal) => {
        return meal.id == props.id;
      }),
      amount: 1,
    };
    orderContext.addMeal(mealObj);
  };
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeHandler}>−</button>
        <button onClick={addHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
