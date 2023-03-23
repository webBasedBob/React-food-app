import React, { useState } from "react";
import classes from "./Rhombus.module.scss";

import { useInView } from "react-intersection-observer";
const Rhombus = (props) => {
  const initialClass = `${classes.container}`;
  const [resolvedClass, setResolvedClass] = useState(initialClass);
  const options = {
    triggerOnce: true,
    onChange: (inView, entry) => {
      if (inView) {
        setTimeout(() => {
          setResolvedClass(
            `${classes.container} ${inView ? classes.bounce : ""}`
          );
          setTimeout(() => {
            setResolvedClass(initialClass);
          }, 1200);
        }, props.delay);
      }
    },
  };
  const { ref, inView, entry } = useInView(options);
  const handleMouseEnter = () => {
    setResolvedClass(`${classes.container} ${inView ? classes.bounce : ""}`);
  };
  const handleMouseLeave = () => {
    setResolvedClass(initialClass);
  };
  return (
    <div
      className={classes.wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={resolvedClass} ref={ref}>
        <div className={classes.bottom}></div>
        <div className={classes.top}>
          <div className={classes.icon}>{props.icon}</div>
        </div>
      </div>
      <div className={classes.text}>
        <h4 className={classes.title}>{props.title}</h4>
        <p className={classes.description}>{props.text}</p>
      </div>
    </div>
  );
};

export default Rhombus;
