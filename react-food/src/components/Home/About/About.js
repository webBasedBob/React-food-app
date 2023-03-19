import React from "react";
import img from "../../../assets/people.jpg";
import classes from "./About.module.scss";
import AboutSection from "./AboutSection";

const About = () => {
  return (
    <div className={classes.container}>
      <AboutSection
        image={img}
        title="who are we?"
        text="Values: Discuss the core values that guide the business, such as integrity, quality, or customer service. This can help to establish a connection with potential customers who share those values."
      />
      <AboutSection
        reverse={true}
        image={img}
        title="who are we?"
        text="Values: Discuss the core values that guide the business, such as integrity, quality, or customer service. This can help to establish a connection with potential customers who share those values."
      />
      <AboutSection
        image={img}
        title="who are we?"
        text="Values: Discuss the core values that guide the business, such as integrity, quality, or customer service. This can help to establish a connection with potential customers who share those values."
      />
      <AboutSection
        reverse={true}
        image={img}
        title="who are we?"
        text="Values: Discuss the core values that guide the business, such as integrity, quality, or customer service. This can help to establish a connection with potential customers who share those values."
      />
    </div>
  );
};

export default About;
