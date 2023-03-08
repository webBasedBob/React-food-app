import React from "react";
import Meals from "../components/FoodList/Meals";
import { json } from "react-router-dom";
import store from "../redux-store";
const FoodListPage = () => {
  return <Meals></Meals>;
};
export default FoodListPage;

export const foodLoader = async () => {
  //caching the response
  let storedMeals = store.getState().meals.meals;
  if (storedMeals.length) {
    return json(storedMeals);
  }
  let mealsResponse = await fetch(
    "https://react-course-proje-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
  );
  let mealsData = await mealsResponse.json();
  let mealsArray = [];
  for (let meal in mealsData) {
    mealsArray.push({
      id: meal,
      ingredients: mealsData[meal].ingredients,
      name: mealsData[meal].name,
      price: mealsData[meal].price,
      image: mealsData[meal].image,
      weight: mealsData[meal].weight,
    });
  }
  return json(mealsArray);
};
