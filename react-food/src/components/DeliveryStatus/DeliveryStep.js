import React from "react";
import classes from "./DeliveryStep.module.scss";

const DeliveryStep = (props) => {
  const resolvedClass = props.active
    ? `${classes["status-row"]} ${classes.active}`
    : classes["status-row"];
  return (
    <div className={resolvedClass}>
      <div className={classes.icon}>{props.icon}</div>
      <h4 className={classes["text__step-name"]}>{props.text}</h4>
      <p className={classes["text__timestamp"]}>{props.time}</p>
    </div>
  );
};
export default DeliveryStep;
