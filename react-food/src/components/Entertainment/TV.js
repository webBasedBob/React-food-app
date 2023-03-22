import React from "react";
import classes from "./TV.module.scss";
import YoutubePlayer from "./YoutubePlayer";
import { useSelector } from "react-redux";
import EntertainmentPicker from "./EntertainmentPicker/EntertainmentPicker";
const TV = () => {
  const youtubePlayerIsDisplayed = useSelector(
    (state) => state.entertainment.playerIsDisplayed
  );
  return (
    <div className={classes.tv}>
      <div className={classes.screen}>
        <div className={classes["inner-screen"]}>
          {youtubePlayerIsDisplayed ? (
            <YoutubePlayer></YoutubePlayer>
          ) : (
            <EntertainmentPicker />
          )}
        </div>
      </div>
      <div className={classes.stand}></div>
    </div>
  );
};

export default TV;
