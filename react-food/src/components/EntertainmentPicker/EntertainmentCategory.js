import React from "react";
import classes from "./EntertainmentCategory.module.scss";

const EntertainmentCategory = (props) => {
  const selectCategory = () => {
    props.selectCategory(props.name);
  };

  return (
    <button onClick={selectCategory} className={classes.category}>
      {props.name}
    </button>
  );
};

export default EntertainmentCategory;
