import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Plus, Minus } from "../../../assets/icons";
import classes from "./ExtraIngredient.module.scss";
import { mealsActions } from "../../../redux-store/meals";
import AmountInput from "../../UI/AmountInput";
const ExtraIngredient = (props) => {
  const ingredientAmount = useSelector(
    (state) => state.meals.currentMeal.ingredients[props.name].quantity
  );
  const dispatch = useDispatch();
  const handleAmountChange = (newValue) => {
    dispatch(
      mealsActions.updateIngredient({
        ingredient: props.name,
        amount: newValue,
      })
    );
    dispatch(mealsActions.updateFinalPrice());
  };
  const inputRef = useRef();
  return (
    <div className={classes["extra-ingr"]}>
      <p className={classes["extra-ingr__name"]}>{props.name}</p>
      <p className={classes["extra-ingr__price"]}>${props.price.toFixed(2)}</p>
      <AmountInput
        changeHandler={handleAmountChange}
        config={{ min: 0, max: 2, step: 1, value: ingredientAmount }}
      ></AmountInput>
    </div>
  );
};

export default ExtraIngredient;

{
  /* <div className={classes["extra-ingr__input"]}>
<div
  onClick={() => {
    handleAmountChange(Number(inputRef.current.value) - 1);
  }}
  className={classes["extra-ingr__icon"]}
>
  {Minus}
</div>
<input
  ref={inputRef}
  type="number"
  min={0}
  max={2}
  step={1}
  value={ingredientAmount}
  onChange={(e) => {
    handleAmountChange(Number(e.target.value));
  }}
></input>
<div
  onClick={() => {
    handleAmountChange(Number(inputRef.current.value) + 1);
  }}
  className={classes["extra-ingr__icon"]}
>
  {Plus}
</div>
</div> */
}
