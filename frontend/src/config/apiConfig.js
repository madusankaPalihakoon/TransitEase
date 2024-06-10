import axios from "axios";
import { openErrorNotification } from "../util/notificationHandler.js";

// Create an Axios instance with default configuration
const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Function to set the authorization token
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

// Global error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ERR_NETWORK") {
      openErrorNotification("Internal serve error, please tray again later!");
    }
    return Promise.reject(error.response.data);
  }
);

export default API;
