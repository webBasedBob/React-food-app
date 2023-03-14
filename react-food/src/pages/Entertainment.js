import React from "react";
import EntertainmentPicker from "../components/EntertainmentPicker/EntertainmentPicker";
import { useSelector } from "react-redux";
// import YoutubePlayer from "../components/YoutubePlayer/YoutubePlayer";
import classes from "./Root.module.scss";
import TV from "../components/Entertainment/TV";
const EntertainmentPage = () => {
  const youtubePlayerIsDisplayed = useSelector(
    (state) => state.entertainment.playerIsDisplayed
  );
  return (
    <>
      {youtubePlayerIsDisplayed ? (
        <TV></TV>
      ) : (
        <EntertainmentPicker></EntertainmentPicker>
      )}
    </>
  );
};
export default EntertainmentPage;
