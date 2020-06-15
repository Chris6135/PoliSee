import axios from "axios";

const SessionAPI = {
  setAuthToken: (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  },
  register: (user) => axios.post("/api/users/register", user),
  login: (user) => axios.post("/api/users/login", user),
};

export default SessionAPI;
