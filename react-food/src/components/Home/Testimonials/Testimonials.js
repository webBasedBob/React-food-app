import React from "react";
import SectionCard from "../UI/SectionCard";
import TestimonialCard from "./TestimonialCard";
import classes from "./Testimonials.module.scss";

const Testimonials = () => {
  return (
    <SectionCard className={classes.container}>
      <div className={classes.testimonials}>
        <TestimonialCard
          text="About Us: While this page should also be included in the navigation menu, you may want to include a brief summary of your company and its mission on the landing page.
        
        Conther that's througnumber."
          image="https://yt3.googleusercontent.com/ytc/AL5GRJVYhcW-qwhs8tyfYMHtcexCS9YJtnoeuri8m8pF=s900-c-k-c0x00ffffff-no-rj"
          name="imi place sa mananc"
        />
        <TestimonialCard
          text="About Us: While this page should also be included in the navigation menu"
          image="https://yt3.googleusercontent.com/ytc/AL5GRJVYhcW-qwhs8tyfYMHtcexCS9YJtnoeuri8m8pF=s900-c-k-c0x00ffffff-no-rj"
          name="imi place sa mananc"
        />
        <TestimonialCard
          text="About Us: , you may want to include a brief summary of your company and its mission on the landing page.
        
        Conther that's through a contact form or phone number."
          image="https://yt3.googleusercontent.com/ytc/AL5GRJVYhcW-qwhs8tyfYMHtcexCS9YJtnoeuri8m8pF=s900-c-k-c0x00ffffff-no-rj"
          name="imi place sa mananc"
        />
      </div>
    </SectionCard>
  );
};

export default Testimonials;
