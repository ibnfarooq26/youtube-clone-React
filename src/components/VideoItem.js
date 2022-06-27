import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

function VideoItem({ video, onSelect }) {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onSelect(video)}
      >
        <img src={video.snippet.thumbnails.medium.url} alt="" />
        <Typography
          variant="subtitle1"
          noWrap={false}
          style={{ padding: "5px", justifyItems: "center" }}
        >
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default VideoItem;
