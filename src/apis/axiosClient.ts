import axios from "axios";

const AXIOS = axios.create({
  baseURL: "https://phimmoi-rest-api.herokuapp.com/",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AXIOS;
