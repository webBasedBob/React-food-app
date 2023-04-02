import React from "react";
import classes from "./TestimonialCard.module.scss";

const TestimonialCard = (props) => {
  return (
    <div className={classes.card}>
      <p className={classes.text}>{props.text}</p>
      <div className={classes.image}>
        <img src={props.image}></img>
      </div>
      <h5 className={classes.name}>{props.name}</h5>
    </div>
  );
};

export default TestimonialCard;
