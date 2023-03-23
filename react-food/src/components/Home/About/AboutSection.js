import React from "react";
import img from "../../../assets/people.jpg";
import classes from "./AboutSection.module.scss";
import SectionCard from "../UI/SectionCard";
import { useInView } from "react-intersection-observer";
const AboutSection = (props) => {
  const options = { triggerOnce: true };
  const { ref, inView, entry } = useInView(options);

  const resolvedClass = `${classes.container} ${
    props.reverse ? `${classes.reverse}` : ""
  }`;
  const resolvedClassOuter = `${inView ? classes["animate-outer"] : ""}`;
  const resolvedClassInner = `${inView ? classes["animate-inner"] : ""}`;
  return (
    <div ref={ref} className={resolvedClass}>
      <div className={`orange-overlay__square ${classes.image}`}>
        <img src={props.image}></img>
      </div>
      <div className={resolvedClassOuter}>
        <div className={resolvedClassInner}>
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
