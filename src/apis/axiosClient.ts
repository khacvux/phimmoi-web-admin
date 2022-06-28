import axios from "axios";

const AXIOS = axios.create({
  baseURL: "http://localhost:8000/admin",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AXIOS;
