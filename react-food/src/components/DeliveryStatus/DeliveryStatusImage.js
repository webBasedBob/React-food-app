import React from "react";
import classes from "./DeliveryStatusImage.module.scss";
import shawarma_store from "../../assets/shawarma_store.png";
import shawarma_meat from "../../assets/shawarma_meat.png";
import knife from "../../assets/knife.png";
import delivery from "../../assets/delivery.png";
import deliveryMan from "../../assets/delivery-man.png";
import deliveryManHand from "../../assets/delivery-man-hand.png";
import pickingUp from "../../assets/picking-up.png";
const WaitingDots = () => {
  return (
    <div className={classes.dots}>
      <div className={`${classes.dot} ${classes["jump-1"]}`}></div>
      <div className={`${classes.dot} ${classes["jump-2"]}`}></div>
      <div className={`${classes.dot} ${classes["jump-3"]}`}></div>
    </div>
  );
};
const ShawarmaStore = () => {
  return (
    <div className={classes.shawarma_store}>
      <img src={shawarma_store}></img>
      <WaitingDots />
    </div>
  );
};
const ShawarmaCooking = () => {
  return (
    <div className={classes.shawarma_cooking}>
      <img className={classes.shawarma_meat} src={shawarma_meat}></img>
      <img className={classes.knife} src={knife}></img>
    </div>
  );
};

const PickingUpOrder = () => {
  return (
    <div className={classes["picking-up"]}>
      <img src={pickingUp}></img>
      <WaitingDots />
    </div>
  );
};

const Delivering = () => {
  return (
    <div className={classes.delivering}>
      <img src={delivery}></img>
    </div>
  );
};

const Delivered = () => {
  return (
    <div className={classes.delivered}>
      <img className={classes.man} src={deliveryMan}></img>
      <img className={classes.hand} src={deliveryManHand}></img>
    </div>
  );
};
const DeliveryStatusImage = (props) => {
  const deliveryStep = props.deliveryStep[props.deliveryStep.length - 1];
  console.log(deliveryStep);
  const stepComponentPairs = {
    "awaiting order": <ShawarmaStore />,
    "order received": <ShawarmaCooking />,
    "order finished": <PickingUpOrder />,
    "order in delivery": <Delivering />,
    "order delivered": <Delivered />,
  };
  return (
    <div className={classes.container}>{stepComponentPairs[deliveryStep]}</div>
  );
};
export default DeliveryStatusImage;
