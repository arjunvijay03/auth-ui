import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakeapi.com/api", // Replace with actual API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
