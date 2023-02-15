import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import React, { useEffect, useState } from "react";
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    let fetchMeals = async () => {
      let mealsResponse = await fetch(
        "https://react-course-proje-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      let mealsData = await mealsResponse.json();
      let mealsArray = [];
      for (let meal in mealsData) {
        mealsArray.push({
          id: meal,
          description: mealsData[meal].description,
          name: mealsData[meal].name,
          price: mealsData[meal].price,
        });
      }
      setMeals(mealsArray);
    };
    fetchMeals();
  }, []);
  const mealsList = meals.map((meal) => (
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
