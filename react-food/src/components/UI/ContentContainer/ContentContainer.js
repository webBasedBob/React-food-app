import React from "react";
import styles from "./ContentContainer.module.css";
const ContentContainer = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default ContentContainer;
