import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import { useSelector } from "react-redux";
import ExpandedMeal from "./ExpandedMeal/ExpandedMeal";
const Meals = () => {
  const expandedMealIsShown = useSelector((state) => {
    return state.meals.expandedMealIsShown;
  });
  return (
    <Fragment>
      <AvailableMeals />
      {expandedMealIsShown && <ExpandedMeal></ExpandedMeal>}
    </Fragment>
  );
};

export default Meals;
