import React, { useState } from "react";
import classes from "./DeliveryStep.module.scss";
import { useEffect } from "react";

const DeliveryStep = (props) => {
  const resolvedClass = props.active
    ? `${classes["status-row"]} ${classes.active}`
    : classes["status-row"];

  const [timestamp, setTimestamp] = useState();

  useEffect(() => {
    if (props.active) {
      setTimestamp(
        new Intl.DateTimeFormat("en-US", {
          minute: "2-digit",
          hour: "2-digit",
        }).format(new Date())
      );
    }
  }, [props.active]);
  return (
    <div className={resolvedClass}>
      <div className={classes.icon}>{props.icon}</div>
      <h4 className={classes["text__step-name"]}>{props.text}</h4>
      <p className={classes["text__timestamp"]}>{timestamp}</p>
    </div>
  );
};
export default DeliveryStep;
