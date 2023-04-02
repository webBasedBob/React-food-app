import React from "react";
import classes from "./CartItem.module.scss";

const CartItem = (props) => {
  return (
    <div className={classes.container}>
      <img className={classes.img} src={props.image}></img>
      <div className={classes.text}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.quantity}> X {props.quantity}</p>
      </div>
      <p className={classes.price}>${props.price.toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
