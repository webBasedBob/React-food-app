import React from "react";
import heroImg1 from "../../../assets/hero-2.png";
import SectionCard from "../UI/SectionCard";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <SectionCard className={classes.container}>
      <div className={classes[`hero-section`]}>
        <div className={classes[`hero-text__container`]}>
          <h2>Hungry and bored? We've got you covered!</h2>
          <p>
            Not only do we offer delicious shawarma that will tantalize your
            taste buds, but we also provide free entertainment to make your
            delivery experience even better.
          </p>
          <p>
            The entertaninent is on the house, you can have it while waiting for
            the food and you can continue to enjoy it while you eat.
          </p>
        </div>
        <div className={classes[`hero-image__container`]}>
          <img className={classes[`hero-image`]} src={heroImg1}></img>
        </div>
      </div>
    </SectionCard>
  );
};

export default Hero;
