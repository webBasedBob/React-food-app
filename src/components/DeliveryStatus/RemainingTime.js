import React, { useEffect, useState, useSyncExternalStore } from "react";
import { useDispatch } from "react-redux";
import classes from "./RemainingTime.module.scss";
import { checkoutActions } from "../../redux-store/checkout";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
const RemainingTime = () => {
  const remainingTime = useSelector((state) => state.checkout.remainingTime);
  const dispatch = useDispatch();
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(remainingTime * 1000));
  const handleSpeedUp = () => {
    dispatch(checkoutActions.speedUpTime());
  };
  return (
    <div className={classes["remaining-time"]}>
      <div className={classes["time-container"]}>
        <p>remaining time:</p>
        <p>{formattedTime}</p>
      </div>
      <Button label="Speed Up" config={{ onClick: handleSpeedUp }} />
    </div>
  );
};
export default RemainingTime;
