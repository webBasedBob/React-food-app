import React from "react";
import classes from "./DeliveryStatus.module.scss";
import image from "../../assets/shawarma.png";
import { Checkmark, Truck, Bag, FoodOutlet } from "../../assets/icons";
const DeliveryStatus = () => {
  //this must be refactored
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={image}></img>
      </div>
      <div className={classes["status-container"]}>
        <div className={classes["status-row"]}>
          <div className={classes.icon}>{FoodOutlet}</div>
          <h4 className={classes["text__step-name"]}>order received</h4>
          <p className={classes["text__timestamp"]}>6:48 PM</p>
        </div>
        <div className={classes["status-row__line"]}>
          <div className={classes.line}></div>
        </div>
        <div className={classes["status-row"]}>
          <div className={classes.icon}>{Bag}</div>
          <h4 className={classes["text__step-name"]}>order finished</h4>
          <p className={classes["text__timestamp"]}>6:48 PM</p>
        </div>
        <div className={classes["status-row__line"]}>
          <div className={classes.line}></div>
        </div>
        <div className={classes["status-row"]}>
          <div className={classes.icon}>{Truck}</div>
          <h4 className={classes["text__step-name"]}>order in delivery</h4>
          <p className={classes["text__timestamp"]}>6:48 PM</p>
        </div>
        <div className={classes["status-row__line"]}>
          <div className={classes.line}></div>
        </div>
        <div className={classes["status-row"]}>
          <div className={classes.icon}>{Checkmark}</div>
          <h4 className={classes["text__step-name"]}>order delivered</h4>
          <p className={classes["text__timestamp"]}>6:48 PM</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryStatus;
