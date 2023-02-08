import styles from "./MealItem.module.css";
import React, { useState, useContext, useRef } from "react";
import MealItemForm from "../MealItemForm/MealItemForm";
import CartContext from "../../context//OrderContext/order-context";

const MealItem = (props) => {
  const meal = props.meal;
  const formattedPrice = `${meal.price.toFixed(2)} $`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <p className={styles.description}>{meal.description}</p>
        <p className={styles.price}>{formattedPrice}</p>
      </div>
      <MealItemForm id={meal.id} />
    </li>
  );
};

export default MealItem;
