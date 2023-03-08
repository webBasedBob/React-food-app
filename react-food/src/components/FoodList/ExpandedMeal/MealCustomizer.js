import React from "react";
import ExtraIngredient from "./ExtraIngredient";
const MealCustomizer = (props) => {
  return (
    <div>
      <h4>Customize Meal</h4>
      <p> 0 means excluded, 1 means normal amount, 2 means extra</p>
      {Object.entries(props.meal.ingredients).map((entry) => {
        if (entry[0] === "sauce") return;
        return (
          <ExtraIngredient
            key={entry[0]}
            name={entry[0]}
            price={entry[1].price}
          ></ExtraIngredient>
        );
      })}
    </div>
  );
};

export default MealCustomizer;
