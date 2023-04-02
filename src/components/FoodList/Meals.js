import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import { useSelector } from "react-redux";
import ExpandedMeal from "./ExpandedMeal/ExpandedMeal";
import { CSSTransition } from "react-transition-group";
// import classes from "./Meals.module.scss";

const Meals = () => {
  const expandedMealIsShown = useSelector((state) => {
    return state.meals.expandedMealIsShown;
  });
  return (
    <Fragment>
      <AvailableMeals />
      <ExpandedMeal display={expandedMealIsShown}></ExpandedMeal>
    </Fragment>
  );
};

export default Meals;
