import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a19649ba6bee21dce9abac3dbaeafb58e80506720cf9dc03e7e08f956dcba818"
  }
});
