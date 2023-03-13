import React, { useState } from "react";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";
const YoutubePlayer = () => {
  let [index, setIndex] = useState(12);
  console.log(index);
  const videoId = useSelector((state) => state.entertainment.videos[index].id);
  return (
    <>
      <YouTube videoId={videoId}></YouTube>
      <button
        onClick={() => {
          setIndex((state) => {
            return ++state;
          });
        }}
      >
        press
      </button>
    </>
  );
};

export default YoutubePlayer;
