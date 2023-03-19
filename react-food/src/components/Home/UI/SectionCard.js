import React from "react";

import classes from "./SectionCard.module.scss";

const SectionCard = (props) => {
  const resolverdClass = `${classes.card} ${props.className}`;
  return <section className={resolverdClass}>{props.children}</section>;
};

export default SectionCard;
