import React, { useEffect, useState, useSyncExternalStore } from "react";
import classes from "./DeliveryStatus.module.scss";
import image from "../../assets/shawarma.png";
import { Checkmark, Truck, Bag, FoodOutlet } from "../../assets/icons";
import DeliveryStep from "./DeliveryStep";
import BetweenStepsLine from "./BetweenStepsLine";
import { useSelector } from "react-redux";
import RemainingTime from "./RemainingTime";
const DeliveryStatus = () => {
  const deliveryStep = useSelector((state) => state.checkout.deliveryStep);
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={image}></img>
      </div>
      <RemainingTime />
      <div className={classes["status-container"]}>
        <DeliveryStep
          icon={FoodOutlet}
          text="order received"
          time="6:48 PM"
          active={deliveryStep.includes("order received")}
        />
        <BetweenStepsLine active={deliveryStep.includes("order finished")} />
        <DeliveryStep
          icon={Bag}
          text="order finished"
          time="6:48 PM"
          active={deliveryStep.includes("order finished")}
        />
        <BetweenStepsLine active={deliveryStep.includes("order in delivery")} />
        <DeliveryStep
          icon={Truck}
          text="order in delivery"
          time="6:48 PM"
          active={deliveryStep.includes("order in delivery")}
        />
        <BetweenStepsLine active={deliveryStep.includes("order delivered")} />
        <DeliveryStep
          icon={Checkmark}
          text="order delivered"
          time="6:48 PM"
          active={deliveryStep.includes("order delivered")}
        />
      </div>
    </div>
  );
};

export default DeliveryStatus;
