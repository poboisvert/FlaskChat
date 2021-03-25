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
      //console.log(res);

      if (res.data.access_token) {
        localStorage.setItem("user", res.data.access_token);
      }

      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return localStorage.getItem("user");
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
