import axios from "axios";

const API = axios.create({
  baseURL: "https://random-data-api.com/api/v2/users?size=100",
});

export default API;