import React from "react";
import { Paper, Typography } from "@material-ui/core";

function MainVideo({ video }) {
  if (!video) return <div>Loading...</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <Paper elevation={6} style={{ height: "60%" }}>
        <iframe
          src={videoSrc}
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="subtitle1">
          {video.snippet.title} | {video.snippet.channelTitle}
        </Typography>
        <Typography varaint="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </>
  );
}

export default MainVideo;
