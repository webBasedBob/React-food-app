import React from "react";
// import EntertainmentPicker from "../components/EntertainmentPicker/EntertainmentPicker";
import { useSelector } from "react-redux";
// import YoutubePlayer from "../components/YoutubePlayer/YoutubePlayer";
import classes from "./Root.module.scss";
import TV from "../components/Entertainment/TV";
import store from "../redux-store";
import { json } from "react-router-dom";
const EntertainmentPage = () => {
  return <TV></TV>;
};
export default EntertainmentPage;
export const entertainmentLoader = async () => {
  //caching the response
  let categories = store.getState().entertainment.categories;
  if (Object.keys(categories).length) {
    return json(categories);
  }
  let categoriesResponse = await fetch(
    "https://react-course-proje-default-rtdb.europe-west1.firebasedatabase.app/entertainment/-NR8ponwTJ4l-6FOKuOe.json"
  );
  let categoriesData = await categoriesResponse.json();
  return json(categoriesData);
};
