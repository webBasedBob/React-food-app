import classes from "./MealItem.module.css";
import { cartActions } from "../../../redux-store";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { useLoaderData } from "react-router";
import { mealsActions } from "../../../redux-store";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const dispatch = useDispatch();
  const addToCartHandler = (amount) => {
    dispatch(
      cartActions.add({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      })
    );
  };
  const meals = useLoaderData();
  const configMealDetailsHandler = () => {
    dispatch(mealsActions.setCurrentMeal(props.id));
  };
  return (
    <li className={classes.meal}>
      <div className={classes["meal-image"]}>
        <img src={props.image}></img>
      </div>
      <div className={classes["details-container"]}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        {(props.showPrice === undefined || props.showPrice === true) && (
          <div className={classes.price}>{price}</div>
        )}
      </div>
      <div className={classes["add-btn-container"]}>
        {(props.showBtn === undefined || props.showBtn === true) && (
          <Button
            config={{ onClick: configMealDetailsHandler }}
            label="+"
          ></Button>
        )}
      </div>
    </li>
  );
};

export default MealItem;
