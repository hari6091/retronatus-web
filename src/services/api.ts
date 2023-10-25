import axios from "axios";

const api = axios.create({
  baseURL: "https://backend:5000",
});

export default api;
