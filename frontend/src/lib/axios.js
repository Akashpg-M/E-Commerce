import axios from "axios";

const axiosinstance = axios.create({
  baseURL : import.meta === "development" ? "http://localhost:5000/api" : "/api",
  withCredentials: true
})