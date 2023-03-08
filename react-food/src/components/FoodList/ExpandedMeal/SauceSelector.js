import React from "react";
import Sauce from "./Sauce";
import { useDispatch, useSelector } from "react-redux";
import { mealsActions } from "../../../redux-store/meals";
import classes from "./SauceSelector.module.scss";
const SouceSelector = (props) => {
  const dispatch = useDispatch();
  const sauces = useSelector((state) => state.meals.sauces);
  const handleAddSauce = (sauce) => {
    dispatch(mealsActions.addSauce(sauce));
  };
  const handleRemoveSauce = (sauce) => {
    dispatch(mealsActions.removeSauce(sauce));
  };
  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.subtitle}</p>
      <ul
        className={`${classes["sauces-list"]} ${classes["list"]} ${
          props.selectedSauces > 2 ? classes["max-reached"] : ""
        }`}
      >
        {sauces.map((sauce) => {
          return (
            <Sauce
              key={sauce}
              name={sauce}
              addSauce={handleAddSauce}
              removeSauce={handleRemoveSauce}
            ></Sauce>
          );
        })}
      </ul>
    </div>
  );
};
export default SouceSelector;
