import axios from "axios";

const API_URL = "/api/";

const register = (email, password) => {
  return axios.post(API_URL + "signup", {
    user: email,
    password: password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      user: email,
      password: password,
    })
    .then((response) => {
      console.log(response)
    });
};

const logout = () => {
  return axios.post(API_URL + "logout").then((response) => {
    console.log(response)
  });
};


const islogged = () => {
	return axios.get(API_URL + "islogged").then(() => {
		return true;
	}).catch(() => {return false;});
};

const AuthService = {
  register,
  login,
  logout,
	islogged,
}

export default AuthService;