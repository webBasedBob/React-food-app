import classes from "./MealItem.module.scss";
import { cartActions } from "../../../redux-store/cart";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { useLoaderData } from "react-router";
import { mealsActions } from "../../../redux-store/meals";
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

  const resolvedClass = `${props.className ? props.className : ""} ${
    classes.meal
  }`;
  return (
    <li className={resolvedClass}>
      <div className={classes["meal-image"]}>
        <img src={props.image}></img>
      </div>
      <div className={classes["details-container"]}>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        {(props.showPrice === undefined || props.showPrice === true) && (
          <h5 className={classes.price}>{price}</h5>
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
