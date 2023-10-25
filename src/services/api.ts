import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5000",
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
  },
});

export default api;
