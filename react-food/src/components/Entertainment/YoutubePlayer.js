import React, { useState } from "react";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";
import classes from "./YoutubePlayer.module.scss";
import Button from "../UI/Button";

const YoutubePlayer = () => {
  const getRandomInt = function (min, max) {
    //MIN and MAX are inclussive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let [index, setIndex] = useState(0);
  const videoId = useSelector((state) => state.entertainment.videos[index]?.id);
  const handleGetAnotherVideo = () => {
    setIndex(getRandomInt(0, 49));
  };
  return (
    <div className={classes.container}>
      <YouTube
        videoId={videoId}
        iframeClassName={classes.iframe}
        className={classes.youtube}
      ></YouTube>
      <Button
        label="Get Another One"
        config={{ onClick: handleGetAnotherVideo }}
      ></Button>
    </div>
  );
};

export default YoutubePlayer;
