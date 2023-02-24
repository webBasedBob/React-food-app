import React from "react";
import Meals from "../components/FoodList/Meals";
import { json } from "react-router-dom";
const FoodListPage = () => {
  return <Meals></Meals>;
};

export default FoodListPage;

export const foodLoader = async () => {
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
  return json(mealsArray);
};
