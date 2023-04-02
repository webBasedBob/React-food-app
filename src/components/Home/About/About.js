import React from "react";
import img from "../../../assets/people.jpg";
import classes from "./About.module.scss";
import AboutSection from "./AboutSection";

const About = () => {
  return (
    <div className={classes.container}>
      <AboutSection
        reverse={true}
        image="https://firebasestorage.googleapis.com/v0/b/react-course-proje.appspot.com/o/team.jpg?alt=media&token=1f16d483-bdbe-4b54-a054-e4bf77605fc5"
        title="Our Story"
        text="Showarma was created by foodies and entertainment lovers. We strive for excellence in everything we do, from sourcing fresh ingredients to curating engaging videos."
      />
      <AboutSection
        image="https://firebasestorage.googleapis.com/v0/b/react-course-proje.appspot.com/o/shawarma.png?alt=media&token=b1e8f98b-3083-43d8-8761-eae7414166a5"
        title="Quality Ingredients"
        text="We source only the freshest and highest quality ingredients for our shawarma, ensuring that every bite is bursting with flavor. From our meat to our vegetables, we prioritize quality in everything we use."
      />
      <AboutSection
        reverse={true}
        image="https://firebasestorage.googleapis.com/v0/b/react-course-proje.appspot.com/o/watching-tv.jpg?alt=media&token=42f95263-bbe6-4efc-8a32-66ef6de6c53c"
        title="Free Entertainment"
        text="Enjoy free videos while waiting for your shawarma or while you're eating. Discover new content every day."
      />
      <AboutSection
        image="https://firebasestorage.googleapis.com/v0/b/react-course-proje.appspot.com/o/enjoying.jpg?alt=media&token=7d3de3d6-977d-4939-a278-19e34777bcba"
        title="Our Commitment"
        text=" We're committed to providing fresh, delicious shawarma and a fun entertainment experience every time. Customer satisfaction is our top priority."
      />
    </div>
  );
};

export default About;
