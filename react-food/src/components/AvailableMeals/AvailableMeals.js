import React, { useDebugValue } from "react";
import MealItem from "../MealItem/MealItem";
import Card from "../UI/Card/Card";
const AvailableMeals = (props) => {
  return (
    <Card>
      <ul>
        {props.meals.map((meal) => {
          return <MealItem meal={meal} key={meal.id} />;
        })}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
