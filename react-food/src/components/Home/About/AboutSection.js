import React from "react";
import img from "../../../assets/people.jpg";
import classes from "./AboutSection.module.scss";
import SectionCard from "../UI/SectionCard";
const AboutSection = (props) => {
  const resolvedClass = `${classes.container} ${
    props.reverse ? `${classes.reverse}` : ""
  }`;
  return (
    <div className={resolvedClass}>
      <div className={`orange-overlay__square ${classes.image}`}>
        <img src={props.image}></img>
      </div>
      <div className={classes["flip-outer-container"]}>
        <div className={classes["flip-inner-container"]}>
          <SectionCard className={classes.content}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
          </SectionCard>
          <SectionCard className={classes.placeholder}></SectionCard>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
