import axios from "axios";

const API_URL = "/";

const register = (username, email, password) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "auth", {
      username,
      password,
    })
    .then((res) => {
      if (res.data.access_token) {
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("username", username);
      }

      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
};

const getCurrentToken = () => {
  return localStorage.getItem("token");
};

const getCurrentUser = () => {
  return localStorage.getItem("username");
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  getCurrentToken,
};
