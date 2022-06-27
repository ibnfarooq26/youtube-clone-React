import axios from "axios";
const key = process.env.REACT_APP_YOUTUBE_API_KEY;
const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
});

export default youtube;
