import {
  createSlice,
  createReducer,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const normalizeResults = (resultsArr) => {
  const normalized = resultsArr.map((result) => {
    return {
      title: result.snippet.title,
      channel: result.snippet.channelTitle,
      thumbnail: result.snippet.thumbnails.high.url,
      id: result.id.videoId,
    };
  });
  console.log(normalized);
  return normalized;
};

export const getVideos = createAsyncThunk(
  "entertainment/getVideos",
  async (categoryId) => {
    console.log("pula");
    let apikey = "AIzaSyB4tPxU7HnHpD442PVCTvSrgQkMKjtnGFU";
    let url = `https://www.googleapis.com/youtube/v3/search?publishedAfter=2020-01-01T00:00:00Z&part=snippet&maxResults=50&videoDefinition=high&videoDuration=medium&order=viewCount&key=${apikey}&topicId=${categoryId}&type=video&videoEmbeddable=true`;
    let response = await fetch(url);
    const json = await response.json();
    console.log(json.items);
    return normalizeResults(json.items);
  }
);

export const entertainmentSlice = createSlice({
  name: "entertainment",
  initialState: {
    chosenTopic: null,
    videos: [],
    playerIsDisplayed: false,
    categories: {},
  },
  reducers: {
    setChosenTopic(state, action) {
      state.chosenTopic = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVideos.fulfilled, (state, action) => {
      state.videos = action.payload;
      state.playerIsDisplayed = true;
    });
  },
});
export const entertainmentActions = entertainmentSlice.actions;
