import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_HOTMART_API || "http://localhost:3000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
