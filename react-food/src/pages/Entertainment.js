import React from "react";
import EntertainmentPicker from "../components/EntertainmentPicker/EntertainmentPicker";
import { useSelector } from "react-redux";
import YoutubePlayer from "../components/YoutubePlayer/YoutubePlayer";
import classes from "./Root.module.scss";
const EntertainmentPage = () => {
  const youtubePlayerIsDisplayed = useSelector(
    (state) => state.entertainment.playerIsDisplayed
  );
  return <div className={classes.pula}></div>;
  return (
    <>
      <EntertainmentPicker></EntertainmentPicker>
      {false && <YoutubePlayer></YoutubePlayer>}
    </>
  );
};
export default EntertainmentPage;
