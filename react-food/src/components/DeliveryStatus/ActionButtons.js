import classes from "./ActionButtons.module.scss";
import React from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const ActionButtons = () => {
  const navigate = useNavigate();
  const goToYoutube = () => {
    navigate("/entertainment");
  };
  const dispatch = useDispatch();
  const handleSeeOrder = () => {};
  return (
    <div className={classes.container}>
      <Button config={{ onClick: handleSeeOrder }} label="See Order"></Button>
      <Button
        config={{ onClick: goToYoutube }}
        label="Wanna watch something?"
      ></Button>
    </div>
  );
};

export default ActionButtons;
