import React from "react";
import classes from "./Rhombus.module.scss";

const Rhombus = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.bottom}></div>
        <div className={classes.top}>
          <div className={classes.icon}>{props.icon}</div>
        </div>
      </div>
      <div className={classes.text}>
        <h4 className={classes.title}>{props.title}</h4>
        <p className={classes.description}>{props.text}</p>
      </div>
    </div>
  );
};

export default Rhombus;
