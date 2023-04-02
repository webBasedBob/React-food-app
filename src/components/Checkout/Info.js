import React from "react";
import classes from "./Info.module.scss";

const Info = (props) => {
  return (
    <div className={classes.container}>
      <p>{props.label}</p>
      <p>{props.data}</p>
    </div>
  );
};

export default Info;
