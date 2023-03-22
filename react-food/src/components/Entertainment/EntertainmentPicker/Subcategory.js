import React from "react";
import classes from "./Subcategory.module.scss";
const Subcategory = (props) => {
  const handleSearch = () => {
    props.handleSearch(props.id);
  };
  return (
    <div className={classes.container} onClick={handleSearch}>
      <div className={classes.image}>
        <img src={props.image}></img>
      </div>
      <div className={classes.text}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Subcategory;
