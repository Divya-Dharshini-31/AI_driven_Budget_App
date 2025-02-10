import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchUser = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/auth/login/", { email, password });
    localStorage.setItem("token", response.data.token);
    return true;
  } catch (error) {
    console.error("Login failed:", error);
    return false;
  }
};

export default api;
