import React from "react";
import classes from "./ExpandedMeals.module.scss";
import Modal from "../../UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { mealsActions } from "../../../redux-store";
import MealItem from "../MealItem/MealItem";
import Sauce from "./Sauce";
import ExtraIngredient from "./ExtraIngredient";
import Button from "../../UI/Button";
import { Minus, Plus } from "../../../assets/icons";
import AmountInput from "../../UI/AmountInput";
import { cartActions } from "../../../redux-store";
const ExpandedMeal = () => {
  const dispatch = useDispatch();
  const closeExpandedMealModalHandler = () => {
    dispatch(mealsActions.hideExpandedMeal());
  };
  const targetMeal = useSelector((state) => {
    return state.meals.currentMeal;
  });
  const sauces = useSelector((state) => state.meals.sauces);

  const handleAddSauce = (sauce) => {
    dispatch(mealsActions.addSauce(sauce));
  };
  const handleRemoveSauce = (sauce) => {
    dispatch(mealsActions.removeSauce(sauce));
  };
  const amountChangeHandler = (newValue) => {
    dispatch(mealsActions.updateAmount(newValue));
    dispatch(mealsActions.updateFinalPrice());
  };
  const addToCartHandler = () => {
    if (targetMeal.sauces.length === 0) {
      alert("Please select at least one sauce");
    }
    dispatch(cartActions.add(targetMeal));
    dispatch(mealsActions.hideExpandedMeal());
  };
  return (
    <Modal onClose={closeExpandedMealModalHandler}>
      <div className={classes["extra-padding"]}>
        {
          <MealItem
            key={targetMeal.id}
            id={targetMeal.id}
            name={targetMeal.name}
            description={targetMeal.description}
            price={targetMeal.price}
            image={targetMeal.image}
            showBtn={false}
            showPrice={false}
          />
        }
        <div>
          <h4>Pick sauces</h4>
          <p>Choose at least 1, maximum 3</p>
          <ul
            className={`${classes["sauces-list"]} ${classes["list"]} ${
              targetMeal.sauces.length > 2 ? classes["max-reached"] : ""
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
        <div>
          <h4>Customize Meal</h4>
          <p> 0 means excluded, 1 means normal amount, 2 means extra</p>
          {Object.entries(targetMeal.ingredients).map((entry) => {
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
        <div className={classes["amount-wrapper"]}>
          <AmountInput
            changeHandler={amountChangeHandler}
            config={{
              min: 0,
              max: 100,
              step: 1,
              value: targetMeal.amount,
              style: {
                textAlign: "center",
              },
            }}
          ></AmountInput>
        </div>
        <Button
          className={classes["order-btn"]}
          label={`Add for $${targetMeal.finalPrice.toFixed(2)}`}
          config={{
            onClick: addToCartHandler,
            style: { width: "100%", marginTop: "2rem" },
          }}
        ></Button>
      </div>
    </Modal>
  );
};

export default ExpandedMeal;

// {Object.keys(targetMeal.ingredients).map((ingr) => {
//   if (ingr === "sauce") return;
//   return <ExtraIngredient key={ingr} name={ingr}></ExtraIngredient>;
// })}
