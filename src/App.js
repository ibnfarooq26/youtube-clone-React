import logo from "./logo.svg";
import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MainVideo from "./components/MainVideo";
import VideoList from "./components/VideoList";

import youtube from "./youtube/api";
const key = process.env.REACT_APP_YOUTUBE_API_KEY;
function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();
  const fetch = async (searchTerm) => {
    try {
      const response = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          q: searchTerm,
          key: key,
        },
      });

      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    } catch (error) {
      console.log("errrrr", error);
    }
  };
  const handleSubmit = (searchTerm) => {
    if (searchTerm) fetch(searchTerm);
    console.log(searchTerm);
  };

  const onSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchBar handleSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={7}>
            <MainVideo video={selectedVideo} />
          </Grid>
          <Grid item xs={5}>
            <VideoList videos={videos} onSelect={onSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
