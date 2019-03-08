import axios from "axios";

const KEY = "AIzaSyDcJzJ4Zud4ycMjgS-z0eRg6dgE2YTFAYc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  }
});
