import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fde20dd136fe45eeafd37d65334a6fce",
  },
});
