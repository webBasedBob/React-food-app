import React from "react";
import classes from "./TV.module.scss";
import YoutubePlayer from "./YoutubePlayer";
const TV = () => {
  return (
    <div className={classes.tv}>
      <div className={classes.screen}>
        <YoutubePlayer></YoutubePlayer>
      </div>
      <div className={classes.stand}></div>
    </div>
  );
};

export default TV;
