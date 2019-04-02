import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default api;