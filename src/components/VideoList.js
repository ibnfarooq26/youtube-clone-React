import React from "react";
import { Grid, Paper } from "@material-ui/core";
import VideoItem from "./VideoItem";
function VideoList({ videos, onSelect }) {
  const videoList = videos.map((video, id) => (
    <VideoItem key={id} video={video} onSelect={onSelect} />
  ));
  return (
    <Grid container spacing={10}>
      {videoList}
    </Grid>
  );
}

export default VideoList;
