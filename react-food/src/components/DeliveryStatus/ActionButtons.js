import classes from "./ActionButtons.module.scss";
import React from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
const ActionButtons = () => {
  const navigate = useNavigate();
  const goToYoutube = () => {
    navigate("/entertainment");
  };
  return (
    <div className={classes.container}>
      {/* <Button label="See Order"></Button> */}
      <Button
        config={{ onClick: goToYoutube }}
        label="Watch something in the meantime"
      ></Button>
    </div>
  );
};

export default ActionButtons;
