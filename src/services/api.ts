import axios from "axios";

const api = axios.create({
  baseURL: "https://mafeck-api.herokuapp.com",
});

export default api;
