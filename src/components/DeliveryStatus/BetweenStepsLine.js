import React from "react";
import classes from "./BetweenStepsLine.module.scss";

const BetweenStepsLine = (props) => {
  const resolvedClass = props.active
    ? `${classes["status-row__line"]} ${classes.active}`
    : classes["status-row__line"];
  return (
    <div className={resolvedClass}>
      <div className={classes.line}></div>
    </div>
  );
};
export default BetweenStepsLine;
