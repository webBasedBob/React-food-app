import React from "react";
import classes from "./ExpandedMeals.module.scss";
import Modal from "../../UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { mealsActions } from "../../../redux-store/meals";
import MealItem from "../MealItem/MealItem";
import Button from "../../UI/Button";
import AmountInput from "../../UI/AmountInput";
import { cartActions } from "../../../redux-store/cart";
import SouceSelector from "./SauceSelector";
import MealCustomizer from "./MealCustomizer";
const ExpandedMeal = () => {
  const dispatch = useDispatch();

  const targetMeal = useSelector((state) => {
    return state.meals.currentMeal;
  });
  const saucesSelected = targetMeal.sauces.length;
  const amountChangeHandler = (newValue) => {
    dispatch(mealsActions.updateAmount(newValue));
    dispatch(mealsActions.updateFinalPrice());
  };
  const closeExpandedMealModalHandler = () => {
    dispatch(mealsActions.hideExpandedMeal());
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
            meal={targetMeal}
            showBtn={false}
            showPrice={false}
          />
        }
        <SouceSelector selectedSauces={saucesSelected}></SouceSelector>
        <MealCustomizer meal={targetMeal}></MealCustomizer>

        <AmountInput
          changeHandler={amountChangeHandler}
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
          config={{
            min: 0,
            max: 100,
            step: 1,
            value: targetMeal.amount,
          }}
        ></AmountInput>
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
