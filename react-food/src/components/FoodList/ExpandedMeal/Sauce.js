import React from "react";
import classes from "./Sauce.module.scss";
import { Checkmark, Plus } from "../../../assets/icons";
import { useState } from "react";
import { setUseProxies } from "immer";
import { useSelector } from "react-redux";
const Sauce = (props) => {
  const [clicked, setClicked] = useState(false);
  const selectedSaucesNo = useSelector(
    (state) => state.meals.currentMeal.sauces.length
  );
  const handleClick = () => {
    if (clicked) {
      props.removeSauce(props.name);
      setClicked((state) => {
        return !state;
      });
    } else if (!clicked && selectedSaucesNo < 3) {
      props.addSauce(props.name);
      setClicked((state) => {
        return !state;
      });
    }
  };
  return (
    <li
      className={`${classes["list-row"]} ${
        clicked ? classes.active : selectedSaucesNo > 2 ? classes.inactive : ""
      }`}
    >
      <p className={classes["sauce-name"]}>{props.name}</p>
      {clicked ? (
        <div
          onClick={handleClick}
          className={`${classes.icon} ${classes.checkmark}`}
        >
          {Checkmark}
        </div>
      ) : (
        <div
          onClick={handleClick}
          className={`${classes.icon} ${classes.plus}`}
        >
          {Plus}
        </div>
      )}
    </li>
  );
};

export default Sauce;
