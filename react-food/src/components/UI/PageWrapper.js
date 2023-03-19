import React from "react";
import classes from "./PageWrapper.module.scss";

const PageWrapper = (props) => {
  return <div className={classes.wrapper}>{props.children}</div>;
};

export default PageWrapper;
