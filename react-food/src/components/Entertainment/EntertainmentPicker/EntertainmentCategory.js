import React from "react";
import classes from "./EntertainmentCategory.module.scss";

const EntertainmentCategory = (props) => {
  const handleSelectSubcategory = () => {
    props.handleSelectSubcategory(props.name);
  };

  return (
    <div className={classes.container}>
      <button onClick={handleSelectSubcategory} className={classes.category}>
        {props.name}
      </button>
    </div>
  );
};

export default EntertainmentCategory;
