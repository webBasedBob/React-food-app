import React from "react";
import classes from "./EntertainmentCategory.module.scss";

const EntertainmentCategory = (props) => {
  const handleSearch = () => {
    props.handleSearch(props.name);
  };

  return (
    <div className={classes.container}>
      <button onClick={handleSearch} className={classes.category}>
        {props.name}
      </button>
    </div>
  );
};

export default EntertainmentCategory;
