import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { mealsActions } from "../../redux-store/meals";
import { useDispatch } from "react-redux";
const AvailableMeals = () => {
  const fetchedMeals = useLoaderData();
  const dispatch = useDispatch();
  fetchedMeals.forEach((meal) => {
    let description = ["Ingredients: "];
    meal.ingredients.forEach((ingr, index) => {
      if (index === meal.ingredients.length - 1) {
        description.push(`${ingr}. `);
      } else {
        description.push(`${ingr}, `);
      }
    });
    description.push(`Weight: ${meal.weight}g`);
    meal.description = description.join("");
  });
  useEffect(() => {
    dispatch(mealsActions.setMeals(structuredClone(fetchedMeals)));
  }, []);
  const mealsList = fetchedMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
