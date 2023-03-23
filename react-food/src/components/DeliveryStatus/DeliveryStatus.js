import React, { useEffect, useState, useSyncExternalStore } from "react";
import classes from "./DeliveryStatus.module.scss";
import image from "../../assets/shawarma.png";
import { Checkmark, Truck, Bag, FoodOutlet } from "../../assets/icons";
import DeliveryStep from "./DeliveryStep";
import BetweenStepsLine from "./BetweenStepsLine";
import { useSelector } from "react-redux";
import RemainingTime from "./RemainingTime";
import DeliveryStatusImage from "./DeliveryStatusImage";
const DeliveryStatus = () => {
  const deliveryStep = useSelector((state) => state.checkout.deliveryStep);
  return (
    <div className={classes.container}>
      <DeliveryStatusImage deliveryStep={deliveryStep} />
      <RemainingTime />
      <div className={classes["status-container"]}>
        <DeliveryStep
          icon={FoodOutlet}
          text="order received"
          active={deliveryStep.includes("order received")}
        />
        <BetweenStepsLine active={deliveryStep.includes("order finished")} />
        <DeliveryStep
          icon={Bag}
          text="order finished"
          active={deliveryStep.includes("order finished")}
        />
        <BetweenStepsLine active={deliveryStep.includes("order in delivery")} />
        <DeliveryStep
          icon={Truck}
          text="in delivery"
          active={deliveryStep.includes("order in delivery")}
        />
        <BetweenStepsLine active={deliveryStep.includes("order delivered")} />
        <DeliveryStep
          icon={Checkmark}
          text="At your door"
          active={deliveryStep.includes("order delivered")}
        />
      </div>
    </div>
  );
};

export default DeliveryStatus;
