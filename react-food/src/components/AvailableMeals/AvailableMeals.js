import React, { useCallback, useDebugValue, useContext } from "react";
import MealItem from "../MealItem/MealItem";
import Card from "../UI/Card/Card";
import MealsContext, {
  MealsContextProvider,
} from "../../context/MealsContext/MealsContext";

const AvailableMeals = () => {
  const localMealsContext = useContext(MealsContext);
  return (
    <Card>
      <ul>
        {localMealsContext.map((meal) => {
          return <MealItem meal={meal} key={meal.id} />;
        })}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
