import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const AvailableMeals = () => {
  const fetchedMeals = useLoaderData();
  const mealsList = fetchedMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
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
