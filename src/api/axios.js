import axios from "axios";
const BASE_URL = "http://localhost:5000"; // backend Url

const api = axios.create({
  baseURL: BASE_URL,
});

////////////////////URL's/////////////////////////
////////////request's to the backend///////////////

export default api;