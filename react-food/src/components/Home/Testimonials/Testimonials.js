import React from "react";
import SectionCard from "../UI/SectionCard";
import TestimonialCard from "./TestimonialCard";
import classes from "./Testimonials.module.scss";

const Testimonials = () => {
  return (
    <SectionCard className={classes.container}>
      <div className={classes.testimonials}>
        <TestimonialCard
          text="Above average!"
          image="https://firebasestorage.googleapis.com/v0/b/react-course-proje.appspot.com/o/imiplacesamananc.jpg?alt=media&token=36331f1c-b905-4f2a-99da-d6285dd172e2"
          name="imi place sa mananc"
        />
        <TestimonialCard
          text="The flavors are spicy and bold, just like my music, even if Pico tries to bring me down. Lelelele"
          image="https://firebasestorage.googleapis.com/v0/b/react-course-proje.appspot.com/o/shakira.jpg?alt=media&token=d0c01aaf-8118-4690-ac2f-8f62fdb64caf"
          name="shakira"
        />
        <TestimonialCard
          text="Even Chelutzu likes it. HATZZ"
          image="https://firebasestorage.googleapis.com/v0/b/react-course-proje.appspot.com/o/dorian.jpg?alt=media&token=fe781c34-8c1b-4dc6-8439-d313daee9b36"
          name="Dorian Popa"
        />
      </div>
    </SectionCard>
  );
};

export default Testimonials;
