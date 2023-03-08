import React from "react";
import classes from "./Restaurant.module.scss";
import Card from "../UI/Card";
import rating from "../../assets/rating.png";
const Restaurant = (props) => {
  const ratingInPercentage = ((props.rating / 5) * 100).toFixed(0);
  const ratingColorStyle = { width: `${ratingInPercentage}%` };

  return (
    <div className={classes["list-item"]}>
      <p className={classes.name}>{props.name}</p>
      <div className={classes.rating}>
        <p className={classes[`rating__value`]}>{props.rating}</p>
        <div className={classes["rating__img"]}>
          <img src={rating}></img>
          <div
            style={ratingColorStyle}
            className={classes["rating__background"]}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
