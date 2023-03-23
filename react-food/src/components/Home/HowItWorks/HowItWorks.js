import React from "react";
import Rhombus from "../../UI/Rhombus.js";
import classes from "./HowItWorks.module.scss";
import SectionCard from "../UI/SectionCard";
import {
  FoodOutlet,
  MapMarker,
  TV,
  Clock,
  Samrtphone,
} from "../../../assets/icons";

const HowItWorks = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <Rhombus
          title="1. order food"
          text="Order your favorite Shawarma"
          icon={Samrtphone}
          delay={0}
        />
        <Rhombus
          title="2. mark your location"
          text="Provide the delivery location"
          icon={MapMarker}
          delay={100}
        />
        <Rhombus
          title="3. select restaurant"
          text="Choose a restaurant near you to make your Shawarma"
          icon={FoodOutlet}
          delay={200}
        />
        <Rhombus
          title="4. wait for the food*"
          text="And watch some videos in our app to kill time"
          icon={Clock}
          delay={300}
        />
        <Rhombus
          title="5. enjoy your meal"
          text="Enjoy your Shawarma and continue watching"
          icon={TV}
          delay={400}
        />
      </div>
    </div>
  );
};

export default HowItWorks;
