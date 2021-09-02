import axios from "axios";

export const API_KEY = "8c79f2b1615181cf6068d0447cff01fd";

const instance = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/`,
});

export default instance;
