import React from "react";
import classes from "./EntertainmentCategory.module.scss";

const EntertainmentCategory = (props) => {
  const handleSearch = () => {
    props.handleSearch(props.name);
  };

  return (
    <button onClick={handleSearch} className={classes.category}>
      {props.name}
    </button>
  );
};

export default EntertainmentCategory;
